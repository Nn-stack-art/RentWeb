// 主入口函数
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM加载完成，初始化事件监听...');

    // 1. 侧边栏导航切换
    const navLinks = document.querySelectorAll('.sidebar .nav-link, .nav-link[data-target]');
    const contentSections = document.querySelectorAll('.content-section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('点击导航链接:', this.getAttribute('data-target'));

            // 移除所有活动状态
            navLinks.forEach(item => item.classList.remove('active'));

            // 添加当前活动状态
            this.classList.add('active');

            // 隐藏所有内容区域
            contentSections.forEach(section => {
                section.style.display = 'none';
            });

            // 显示对应的内容区域
            const target = this.getAttribute('data-target');
            const targetElement = document.getElementById(target);
            if (targetElement) {
                targetElement.style.display = 'block';
                console.log('显示内容区域:', target);

                // 如果是"我的"页面，加载收藏列表
                if (target === 'profile') {
                    console.log('加载收藏列表...');
                    setTimeout(loadCollectedHouses, 100); // 加一点延迟确保DOM更新
                }
                
                // 如果是数据解析页面，初始化图表
                if (target === 'data-analysis') {
                    console.log('初始化数据解析图表...');
                    // 确保data-analysis.js已加载并执行图表初始化
                    if (typeof initCharts === 'function') {
                        setTimeout(() => {
                            initCharts();
                        }, 150); // 稍微延迟以确保页面布局完成
                    }
                    
                    // 确保地图也正确初始化
                    if (typeof initBaiduMapWithMarkers === 'function') {
                        setTimeout(() => {
                            initBaiduMapWithMarkers();
                        }, 200); // 稍微延迟以确保地图容器显示
                    }
                }
            } else {
                console.warn('未找到目标元素:', target);
            }
        });
    });

    // 2. 侧边栏折叠功能（移动端）
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.querySelector('.sidebar');

    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('collapsed');
        });
    }

    // 3. 取消收藏按钮事件（事件委托）
    document.addEventListener('click', function(e) {
        if (e.target.closest('.cancel-collect')) {
            e.preventDefault();
            const button = e.target.closest('.cancel-collect');
            const houseId = button.getAttribute('data-house-id');
            console.log('取消收藏房源ID:', houseId);

            if (confirm('确定要取消收藏该房源吗？')) {
                // 使用Fetch API代替jQuery的ajax
                fetch('/collection/toggle', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                    body: JSON.stringify({ houseId: houseId })
                })
                    .then(response => response.json())
                    .then(result => {
                        if (result.code === 200) {
                            alert(result.data);
                            loadCollectedHouses();
                        } else {
                            alert(result.data || '取消收藏失败！');
                        }
                    })
                    .catch(error => {
                        console.error('取消收藏失败:', error);
                        alert('网络错误，取消失败！');
                    });
            }
        }
    });

    // 4. 初始显示第一个内容区域
    const firstContent = document.querySelector('.content-section');
    if (firstContent) {
        firstContent.style.display = 'block';
    }
});

// 加载收藏列表（纯JavaScript版本）
function loadCollectedHouses() {
    console.log('执行loadCollectedHouses函数');

    const listContainer = document.getElementById('collectedHousesList');
    const loading = document.getElementById('collectionLoading');
    const noCollections = document.getElementById('noCollections');

    if (!listContainer) {
        console.error('错误：未找到collectedHousesList元素');
        return;
    }

    if (loading) loading.classList.remove('d-none');
    if (noCollections) noCollections.classList.add('d-none');
    listContainer.innerHTML = '';

    console.log('发送收藏列表请求...');

    // 使用Fetch API替代jQuery
    fetch('/collection/my-collections', {
        method: 'GET',
        credentials: 'include'  // 相当于jQuery的xhrFields: { withCredentials: true }
    })
        .then(response => {
            console.log('收到响应，状态码:', response.status);
            if (!response.ok) {
                if (response.status === 401 || response.status === 403) {
                    window.location.href = '/user/login';
                    return null;
                }
                throw new Error('网络响应不正常');
            }
            return response.json();
        })
        .then(result => {
            console.log('收到数据:', result);
            if (loading) loading.classList.add('d-none');

            if (!result) return; // 跳转登录后不再继续

            if (result.code === 200) {
                const collectedHouses = result.data;
                if (collectedHouses.length === 0) {
                    if (noCollections) noCollections.classList.remove('d-none');
                    return;
                }
                renderCollectedHouses(collectedHouses);
            } else {
                alert(result.data || '查询收藏列表失败！');
            }
        })
        .catch(error => {
            console.error('请求失败:', error);
            if (loading) loading.classList.add('d-none');
            alert('加载失败，请检查网络连接！');
        });
}

// 渲染收藏列表（纯JavaScript版本）
function renderCollectedHouses(houses) {
    console.log('渲染收藏列表，房源数量:', houses.length);

    const listContainer = document.getElementById('collectedHousesList');
    if (!listContainer) return;

    houses.forEach(house => {

        const colDiv = document.createElement('div');
        colDiv.className = 'col-12 col-md-6 col-lg-4';
        colDiv.innerHTML = `
            <div class="card collection-card overflow-hidden rounded">
                <div class="card-body collection-card-body">
                    <h5 class="card-title collection-card-title" title="${house.title || '未知房源'}">
                        ${house.title || '未知房源'}
                    </h5>
                    
                    <div class="collection-card-price">
                        ${house.price ? house.price.toLocaleString() + ' 元/月' : '价格面议'}
                    </div>
                    
                    <div class="collection-card-info">
                        <p class="mb-1">
                            <i class="fa fa-map-marker"></i> ${house.area || '未知地区'}
                        </p>
                        <p class="mb-1">
                            <i class="fa fa-building-o"></i> ${house.roomType || '未知房型'} · 
                            <i class="fa fa-arrows-alt"></i> ${house.square ? house.square.toFixed(2) + ' ㎡' : '未知面积'}
                        </p>
                        <p class="mb-0">
                            <i class="fa fa-compass"></i> ${house.position || '未知朝向'}
                        </p>
                    </div>
                    
                    <div class="collection-card-actions">
                        <a href="/house/detail-page?id=${house.id}" class="btn collection-btn-detail text-white">
                            <i class="fa fa-eye me-1"></i> 查看详情
                        </a>
                        <a href="#" class="btn collection-btn-cancel cancel-collect" data-house-id="${house.id}">
                            <i class="fa fa-heart-o me-1"></i> 取消收藏
                        </a>
                    </div>
                </div>
            </div>
        `;

        listContainer.appendChild(colDiv);
    });
}