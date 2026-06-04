document.addEventListener('DOMContentLoaded', function() {
    // 获取表单和相关元素
    const filterForm = document.getElementById('houseFilterForm');
    const regionSelect = document.getElementById('regionSelect');
    
    // 表单提交事件
    filterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 获取筛选条件
        const filters = {
            areaKeyword: regionSelect.value,
            minPrice: document.getElementById('minPrice').value,
            maxPrice: document.getElementById('maxPrice').value,
            roomTypeKeyword: document.getElementById('houseTypeSelect').value,
            position: document.getElementById('orientationSelect').value
        };
        
        // 执行筛选
        performHouseSearch(filters);
    });

    // 执行房源搜索的函数
    function performHouseSearch(filters) {
        // 显示加载状态
        const resultsContainer = document.getElementById('filterResults');
        resultsContainer.innerHTML = '<div class="text-center"><div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div></div>';

        // 构造查询参数
        const queryParams = new URLSearchParams();
        if (filters.areaKeyword) queryParams.append('areaKeyword', filters.areaKeyword);
        if (filters.minPrice) queryParams.append('minPrice', filters.minPrice);
        if (filters.maxPrice) queryParams.append('maxPrice', filters.maxPrice);
        if (filters.roomTypeKeyword) queryParams.append('roomTypeKeyword', filters.roomTypeKeyword);
        if (filters.position) queryParams.append('position', filters.position);

        queryParams.append('pageNum', 0);
        queryParams.append('pageSize', 9);

        // 构造完整的URL（用于调试）
        const url = `/house/page?${queryParams.toString()}`;
        console.log('请求URL:', url);
        console.log('筛选条件:', filters);

        // 调用后端API进行房源搜索
        fetch(url, {
            method: 'GET',
            credentials: 'same-origin' // 确保发送cookies/session信息
        })
        .then(response => {
            console.log('响应状态:', response.status);
            console.log('响应头:', [...response.headers.entries()]);

            if (!response.ok) {
                throw new Error(`HTTP错误! 状态码: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('响应数据:', data);
            displaySearchResults(data, filters);
        })
        .catch(error => {
            console.error('完整错误信息:', error);

            // 更详细的错误信息
            let errorMessage = '搜索过程中发生错误';
            if (error instanceof TypeError && error.message.includes('fetch')) {
                errorMessage = '网络连接错误，请检查网络连接或服务器是否运行';
            } else if (error.message) {
                errorMessage = error.message;
            }

            resultsContainer.innerHTML = `<div class="alert alert-danger">搜索过程中发生错误：${errorMessage}，请稍后重试。</div>`;
        });
    }

    // 全局变量：存储当前筛选条件、当前页码、总页数（关键：保存总页数）
    let currentFilters = {}; // 保存当前筛选条件
    let currentPageNum = 0; // 当前页码（后端格式，0开始）
    let totalPages = 0; // 总页数（新增：单独保存，避免分页时获取不到）

    function displaySearchResults(data, filters) {
        const resultsContainer = document.getElementById('filterResults');

        // 保存核心参数（关键：更新总页数）
        currentFilters = filters || {};
        currentPageNum = data.data?.number || 0; // 后端当前页码
        totalPages = data.data?.totalPages || 0; // 保存总页数到全局

        // 检查是否有数据
        if (!data || !data.data || !data.data.content || data.data.content.length === 0) {
            resultsContainer.innerHTML = `
            <h3 class="mb-3">房源列表（共 ${data?.data?.totalElements || 0} 条）</h3>
            <div class="alert alert-info">未找到符合条件的房源。</div>
            <div class="d-flex justify-content-center mt-4">
                <nav aria-label="分页导航">
                    <ul class="pagination">
                        <li class="page-item disabled"><a class="page-link" href="javascript:;">上一页</a></li>
                        <li class="page-item disabled"><a class="page-link" href="javascript:;">下一页</a></li>
                    </ul>
                </nav>
            </div>
        `;
            return;
        }

        // 提取分页参数
        const total = data.data.totalElements;
        const currentPage = currentPageNum; // 前端显示页码
        const pageSize = data.data.size;

        // 构造房源列表
        let housesHtml = `<h3 class="mb-3">房源列表（共 ${total} 条，${currentPage}/${totalPages} 页）</h3><div class="row">`;
        data.data.content.forEach(house => {
            console.log('当前房源数据:', house);
            console.log('房源的 id 字段:', house.id);
            housesHtml += `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="house-card">
                <div class="house-card-body">
                    <h5 class="card-title">${house.title || '未知房源'}</h5>
                    <p class="card-text">
                        <strong>地区：</strong>${house.area || '未知'}<br>
                        <strong>价格：</strong><span class="house-price">${house.price ? house.price.toLocaleString() : '面议'}</span>元/月<br>
                        <strong>房型：</strong>${house.roomType || '未知'}<br>
                        <strong>朝向：</strong>${house.position || '未知'}<br>
                        <strong>地址：</strong>${house.detailPlace || '未知'}<br>
                        <strong>面积：</strong>${house.square || '0'} ㎡
                    </p>
                    <button class="btn btn-primary" onclick="viewDetail('${house.id || ''}')">查看详情</button>
                </div>
            </div>
        </div>
    `;
        });
        housesHtml += '</div>';

        // 构造分页控件（关键：给分页容器添加 data-total-pages 属性，双重保障）
        housesHtml += `
        <div class="d-flex justify-content-center mt-4">
            <nav aria-label="分页导航">
                <ul class="pagination" data-total-pages="${totalPages}">
                    <!-- 上一页：当前是第1页 则禁用 -->
                    <li class="page-item ${currentPageNum === 1 ? 'disabled' : ''}">
                        <a class="page-link" href="javascript:;" onclick="switchPage(${currentPageNum - 1})">上一页</a>
                    </li>
                    <!-- 下一页：当前是最后一页（currentPageNum >= totalPages-1）则禁用 -->
                    <li class="page-item ${currentPageNum >= totalPages - 1 ? 'disabled' : ''}">
                        <a class="page-link" href="javascript:;" onclick="switchPage(${currentPageNum + 1})">下一页</a>
                    </li>
                </ul>
            </nav>
        </div>
    `;

        resultsContainer.innerHTML = housesHtml;
    }

// 分页切换核心函数（修复：优先用全局 totalPages，避免获取不到）
    window.switchPage = function switchPage(targetPageNum) {
        console.log('切换到页码（后端格式）:', targetPageNum);
        console.log('总页数:', totalPages);

        if (targetPageNum < 0 || targetPageNum >= totalPages) {
            console.log('页码无效，跳过请求');
            return;
        }


    // 显示加载状态
        const resultsContainer = document.getElementById('filterResults');
        resultsContainer.innerHTML = `
        <h3 class="mb-3">房源列表</h3>
        <div class="text-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <p class="mt-2">正在加载第 ${targetPageNum + 1} 页...</p>
        </div>
    `;

        // 构造请求参数（复用当前筛选条件）
        const queryParams = new URLSearchParams();
        // 筛选条件
        if (currentFilters.areaKeyword) queryParams.append('areaKeyword', currentFilters.areaKeyword);
        if (currentFilters.minPrice) queryParams.append('minPrice', currentFilters.minPrice);
        if (currentFilters.maxPrice) queryParams.append('maxPrice', currentFilters.maxPrice);
        if (currentFilters.roomTypeKeyword) queryParams.append('roomTypeKeyword', currentFilters.roomTypeKeyword);
        if (currentFilters.position) queryParams.append('position', currentFilters.position);
        // 分页参数
        queryParams.append('pageNum', targetPageNum); // 目标页码（后端格式）
        queryParams.append('pageSize', 9); // 每页条数

        const requestUrl = `/house/page?${queryParams.toString()}`;
        console.log('分页请求URL:', requestUrl);

        // 发送请求
        fetch(requestUrl, {
            method: 'GET',
            credentials: 'same-origin'
        })
            .then(response => {
                if (!response.ok) throw new Error(`状态码: ${response.status}`);
                return response.json();
            })
            .then(data => {
                console.log('第', targetPageNum + 1, '页返回数据:', data);
                displaySearchResults(data, currentFilters); // 重新渲染页面
            })
            .catch(error => {
                resultsContainer.innerHTML = `
            <div class="alert alert-danger">
                分页加载失败：${error.message}，请重试
            </div>
            <button class="btn btn-primary" onclick="switchPage(${targetPageNum})">重新加载</button>
        `;
                console.error('分页请求错误:', error);
            });
    }

// 查看详情函数
    window.viewDetail = function viewDetail(houseId) {
        if (!houseId) {
            alert('房源ID不存在！');
            return;
        }
        // 关键修改：跳转地址改为 Controller 定义的 /house/detail-page?id=xxx
        window.location.href = `/house/detail-page?id=${houseId}`;
    };
});