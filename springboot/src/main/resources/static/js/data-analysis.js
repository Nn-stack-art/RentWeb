// 等待页面加载完成
document.addEventListener('DOMContentLoaded', function() {
    let barChart, pieChart;

    // 初始化图表的函数
    function initChartsInstance() {
        // 确保DOM元素存在且可见
        const barChartElement = document.getElementById('barChart');
        const pieChartElement = document.getElementById('pieChart');
        
        // 如果图表实例已存在，先销毁
        if (window.barChartInstance) {
            window.barChartInstance.dispose();
        }
        if (window.pieChartInstance) {
            window.pieChartInstance.dispose();
        }
        
        // 初始化图表实例
        barChart = echarts.init(barChartElement);
        pieChart = echarts.init(pieChartElement);
        
        // 保存实例引用
        window.barChartInstance = barChart;
        window.pieChartInstance = pieChart;
    }

    // 2. 加载数据并初始化图表
    function loadAndInitCharts() {
        // 确保图表实例存在
        initChartsInstance();
        
        loadDataAndInitBarChart();
        loadDataAndInitPieChart();
        initBaiduMapWithMarkers(); // 替换为标记点初始化函数

        // 初始化完成后强制触发一次 resize，确保图表尺寸正确
        setTimeout(() => {
            triggerResize();
        }, 100);
    }

    // 使用 requestAnimationFrame 确保在浏览器重绘前执行
    function waitForPageRender() {
        if (window.requestAnimationFrame) {
            window.requestAnimationFrame(() => {
                // 确保元素可见且布局完成
                if (document.getElementById('data-analysis').style.display !== 'none') {
                    loadAndInitCharts();
                } else {
                    // 监听页面切换事件
                    const observer = new MutationObserver(function(mutations) {
                        mutations.forEach(function(mutation) {
                            if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                                const section = document.getElementById('data-analysis');
                                if (section && section.style.display !== 'none') {
                                    // 延迟执行以确保页面布局完全渲染
                                    setTimeout(() => {
                                        loadAndInitCharts();
                                    }, 100);
                                    observer.disconnect();
                                }
                            }
                        });
                    });
                    observer.observe(document.getElementById('data-analysis'), {
                        attributes: true,
                        attributeFilter: ['style']
                    });
                }
            });
        } else {
            // 降级方案
            setTimeout(() => {
                loadAndInitCharts();
            }, 300);
        }
    }

    // 等待页面完全加载并执行图表初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', waitForPageRender);
    } else {
        // 检查当前页面是否已显示数据解析部分
        if (document.getElementById('data-analysis').offsetParent !== null) {
            // 如果数据解析部分当前可见，则立即初始化
            setTimeout(waitForPageRender, 100);
        } else {
            // 如果数据解析部分不可见，则在切换到该部分时再初始化
            waitForPageRender();
        }
    }

    // 3. 绑定刷新按钮事件
    document.getElementById('refreshChart').addEventListener('click', function() {
        initCharts();
        initBaiduMapWithMarkers(); // 刷新地图标记点
        // 刷新后也强制调整尺寸
        triggerResize();
        alert('数据已刷新！');
    });

    // 4. 绑定维度切换事件
    document.getElementById('dataDimension').addEventListener('change', function() {
        initCharts();
        initBaiduMapWithMarkers(); // 切换维度刷新标记点
        triggerResize();
    });

    // 5. 统一的窗口大小变化处理（只绑定一次，避免重复）
    window.addEventListener('resize', function() {
        if (window.barChartInstance) {
            window.barChartInstance.resize();
        }
        if (window.pieChartInstance) {
            window.pieChartInstance.resize();
        }
        
        // 百度地图自适应：传统版地图无resize，用checkResize+panBy模拟
        if (window.baiduMapInstance) {
            window.baiduMapInstance.checkResize();
            window.baiduMapInstance.panBy(0, 0);
        }
    });

    // 强制触发 resize 事件的辅助函数
    function triggerResize() {
        // 创建并触发 resize 事件
        const resizeEvent = window.Event ?
            new Event('resize') :
            document.createEvent('Event');

        if (resizeEvent.initEvent) {
            resizeEvent.initEvent('resize', true, true);
        }

        window.dispatchEvent(resizeEvent);

        // 额外兜底：直接调用图表 resize
        if (window.barChartInstance) {
            window.barChartInstance.resize();
        }
        if (window.pieChartInstance) {
            window.pieChartInstance.resize();
        }
    }

    async function loadDataAndInitBarChart() {
        try {
            // 显示加载状态
            if (window.barChartInstance) {
                window.barChartInstance.showLoading();
            } else {
                // 如果实例不存在，先初始化
                const barChartElement = document.getElementById('barChart');
                if (barChartElement) {
                    let tempChart = echarts.init(barChartElement);
                    tempChart.showLoading();
                    tempChart.dispose();
                }
            }
            // 从后端API获取数据
            const response = await fetch('/api/house/price');
            const result = await response.json();
            console.log('获取到的柱状图数据:', result);
            if (result.code === 200) {
                const data = result.data;
                initBarChart(data);
            } else {
                console.error('获取柱状图数据失败:', result.message);
                alert('获取数据失败: ' + result.message);
            }
        } catch (error) {
            console.error('柱状图请求失败:', error);
            alert('网络请求失败，使用模拟数据');
            // 模拟数据兜底
            const mockData = {
                districtList: ['天河', '越秀', '海珠', '荔湾', '白云', '番禺'],
                avgPriceList: [4500, 4200, 3800, 3500, 3000, 2800],
                minPriceList: [2000, 1800, 1600, 1500, 1200, 1000],
                maxPriceList: [8000, 7500, 7000, 6500, 6000, 5500]
            };
            initBarChart(mockData);
        } finally {
            // 隐藏加载状态
            if (window.barChartInstance) {
                window.barChartInstance.hideLoading();
            }
        }
    }

    function initBarChart(data) {
        const dimension = document.getElementById('dataDimension').value;
        // ===== 优化后的柱状图配置（柱子加粗版）=====
        const barOption = {
            // 标题优化：字体、颜色、间距
            title: {
                text: '广州各区租金统计',
                left: 'center',
                textStyle: {
                    fontSize: 18,
                    fontWeight: 600,
                    color: '#333',
                    fontFamily: 'Microsoft YaHei, sans-serif'
                },
                subtext: '单位：元/月 | 数据来源：广州租房市场',
                subtextStyle: {
                    fontSize: 12,
                    color: '#666',
                    padding: [5, 0, 0, 0]
                },
                top: 10
            },
            // 提示框优化：自定义样式、格式化数值
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                    shadowStyle: {
                        color: 'rgba(102, 126, 234, 0.1)'
                    }
                },
                textStyle: {
                    fontSize: 12,
                    fontFamily: 'Microsoft YaHei'
                },
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: '#e6e6e6',
                borderWidth: 1,
                padding: 10,
                formatter: function(params) {
                    let res = `<div style="font-weight:600;margin-bottom:5px;">${params[0].axisValue}</div>`;
                    params.forEach(item => {
                        const color = item.color;
                        const name = item.seriesName;
                        const value = item.value.toLocaleString(); // 数字千分位格式化
                        res += `<div style="display:flex;align-items:center;margin:3px 0;">
                    <span style="display:inline-block;width:8px;height:8px;background:${color};border-radius:50%;margin-right:6px;"></span>
                    <span>${name}：</span>
                    <span style="font-weight:600;margin-left:4px;">${value} 元/月</span>
                </div>`;
                    });
                    return res;
                }
            },
            // 图例优化：位置、样式、交互
            legend: {
                data: ['平均租金', '最低租金', '最高租金'],
                top: 60,
                left: 'center',
                itemGap: 20,
                itemWidth: 12,
                itemHeight: 12,
                textStyle: {
                    fontSize: 12,
                    color: '#666',
                    fontFamily: 'Microsoft YaHei'
                },
                // 图例悬浮高亮
                inactiveColor: '#999',
                selectedMode: 'single' // 可选：single（单选）/multiple（多选）/false（不可选）
            },
            // 网格优化：更柔和的线条
            grid: {
                left: '5%',
                right: '5%',
                bottom: '8%',
                top: '100px',
                containLabel: true,
                lineStyle: {
                    color: '#f0f0f0',
                    width: 1
                }
            },
            // X轴优化：倾斜标签避免重叠、样式美化
            xAxis: {
                type: 'category',
                data: data.districtList,
                axisLine: {
                    lineStyle: {
                        color: '#e6e6e6'
                    }
                },
                axisTick: {
                    alignWithLabel: true,
                    length: 6
                },
                axisLabel: {
                    fontSize: 11,
                    color: '#666',
                    rotate: 15, // 标签倾斜15度
                    margin: 8,
                    fontFamily: 'Microsoft YaHei'
                },
                // 给X轴加刻度高亮
                splitLine: {
                    show: false
                }
            },
            // Y轴优化：千分位格式化、样式美化
            yAxis: {
                type: 'value',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    fontSize: 11,
                    color: '#666',
                    fontFamily: 'Microsoft YaHei',
                    // 数值千分位格式化
                    formatter: function(value) {
                        return value.toLocaleString();
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#f5f5f5',
                        type: 'dashed' // 虚线网格更柔和
                    }
                },
                // Y轴最小值从0开始，避免误导
                min: 0,
                // 自动计算间隔，避免刻度过密
                interval: 'auto'
            },
            // 系列优化：渐变色彩、圆角、动画（柱子加粗核心修改）
            series: [
                {
                    name: '平均租金',
                    type: 'bar',
                    data: data.avgPriceList,
                    // 柱状图圆角
                    barRadius: [4, 4, 0, 0],
                    // 渐变填充
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#667eea' },
                            { offset: 1, color: '#764ba2' }
                        ])
                    },
                    // 柱子宽度从25%调至40%（核心加粗）
                    barWidth: '40%',
                    // 优化柱子间距，避免重叠
                    barCategoryGap: '20%',
                    // 悬浮高亮
                    emphasis: {
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                { offset: 0, color: '#5a67d8' },
                                { offset: 1, color: '#6b46c1' }
                            ]),
                            shadowBlur: 10,
                            shadowColor: 'rgba(102, 126, 234, 0.3)'
                        }
                    }
                },
                {
                    name: '最低租金',
                    type: 'bar',
                    data: data.minPriceList,
                    barRadius: [4, 4, 0, 0],
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#91cc75' },
                            { offset: 1, color: '#5cdbd3' }
                        ])
                    },
                    // 柱子宽度同步加粗至40%
                    barWidth: '40%',
                    emphasis: {
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                { offset: 0, color: '#73d13d' },
                                { offset: 1, color: '#4cdbc4' }
                            ]),
                            shadowBlur: 10,
                            shadowColor: 'rgba(145, 204, 117, 0.3)'
                        }
                    }
                },
                {
                    name: '最高租金',
                    type: 'bar',
                    data: data.maxPriceList,
                    barRadius: [4, 4, 0, 0],
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#facc15' },
                            { offset: 1, color: '#ff9f43' }
                        ])
                    },
                    // 柱子宽度同步加粗至40%
                    barWidth: '40%',
                    emphasis: {
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                { offset: 0, color: '#fab005' },
                                { offset: 1, color: '#ff7d00' }
                            ]),
                            shadowBlur: 10,
                            shadowColor: 'rgba(250, 204, 21, 0.3)'
                        }
                    }
                }
            ],
            // 全局动画：更流畅的过渡
            animation: true,
            animationDuration: 1000,
            animationEasing: 'cubicOut',
            // 自适应容器变化
            responsive: true
        };
        if (window.barChartInstance) {
            window.barChartInstance.setOption(barOption);
        }
    }

    async function loadDataAndInitPieChart() {
        try {
            // 显示加载状态
            if (window.pieChartInstance) {
                window.pieChartInstance.showLoading();
            } else {
                // 如果实例不存在，先初始化
                const pieChartElement = document.getElementById('pieChart');
                if (pieChartElement) {
                    let tempChart = echarts.init(pieChartElement);
                    tempChart.showLoading();
                    tempChart.dispose();
                }
            }
            // 从后端API获取数据
            const response_pie = await fetch('/api/house/roomType');
            const result_pie = await response_pie.json();
            console.log('获取到的饼图数据:', result_pie);
            if (result_pie.code === 200) {
                const data = result_pie.data;
                initPieChart(data);
            } else {
                console.error('获取饼图数据失败:', result_pie.message);
                alert('获取数据失败: ' + result_pie.message);
            }
        } catch (error) {
            console.error('饼图请求失败:', error);
            alert('网络请求失败，使用模拟数据');
            // 模拟数据兜底
            const mockData = [1200, 2500, 1800, 800];
            initPieChart(mockData);
        } finally {
            // 隐藏加载状态
            if (window.pieChartInstance) {
                window.pieChartInstance.hideLoading(); // 修复：之前错误使用barChart.hideLoading()
            }
        }
    }

    function initPieChart(data) {
        // 计算总房源数（用于占比计算）
        const total = data.reduce((a, b) => a + b, 0);
        // 格式化数据（带名称+数值+占比，修复百分比显示）
        const pieData = [
            {value: data[0], name: '1室'},
            {value: data[1], name: '2室'},
            {value: data[2], name: '3室'},
            {value: data[3], name: '4室+'}
        ];

        // ===== 高直观性+好看配色的饼图配置 =====
        const pieOption = {
            // 标题：明确图表含义
            title: {
                text: '广州租房房型占比',
                left: 'center',
                top: 10,
                textStyle: {
                    fontSize: 16,
                    fontWeight: 600,
                    color: '#333',
                    fontFamily: 'Microsoft YaHei'
                },
                subtext: `总房源数：${total.toLocaleString()} 套`,
                subtextStyle: {
                    fontSize: 12,
                    color: '#666'
                }
            },
            // 提示框：极简但关键信息齐全
            tooltip: {
                trigger: 'item',
                formatter: '{b}：{c} 套 ({d}%)',
                textStyle: {fontSize: 12},
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: '#e6e6e6',
                borderWidth: 1,
                padding: 8
            },
            // 图例：横向排布+顶部，直接显示占比
            legend: {
                orient: 'horizontal',
                top: 50,
                left: 'center',
                itemGap: 30,
                itemWidth: 14,
                itemHeight: 14,
                textStyle: {
                    fontSize: 13,
                    color: '#333',
                    fontFamily: 'Microsoft YaHei'
                },
                // 图例显示房型+占比
                formatter: function(name) {
                    const item = pieData.find(i => i.name === name);
                    const percent = item ? ((item.value/total)*100).toFixed(1) : 0;
                    return `${name} (${percent}%)`;
                }
            },
            series: [
                {
                    name: '房型占比',
                    type: 'pie',
                    radius: ['20%', '65%'],
                    center: ['50%', '60%'],
                    // 核心：修复百分比显示（用{d}内置变量，确保占比正确）
                    label: {
                        show: true,
                        position: 'inside', // 标签在饼图内部
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: '#fff',
                        fontFamily: 'Microsoft YaHei',
                        // 格式化：房型 + 百分比（{d}是ECharts内置的占比变量，必用！）
                        formatter: '{b}\n{d}%'
                    },
                    labelLine: {show: false}, // 隐藏外侧标签线
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 15,
                            shadowColor: 'rgba(0,0,0,0.2)'
                        }
                    },
                    data: pieData,
                    // 高级莫兰迪配色（柔和不刺眼，区分度高）
                    color: [
                        '#8390FA', // 淡紫蓝（1室）
                        '#5CDBD3', // 薄荷绿（2室）
                        '#FFD591', // 暖黄（3室）
                        '#FF9BB3'  // 浅粉（4室+）
                    ],
                    // 扇区样式：清晰区分
                    itemStyle: {
                        borderColor: '#fff',
                        borderWidth: 3,
                        borderRadius: 4
                    },
                    // 简单流畅的动画
                    animation: true,
                    animationDuration: 800,
                    animationEasing: 'easeOutCirc'
                }
            ],
            // 自适应
            responsive: true
        };
        if (window.pieChartInstance) {
            window.pieChartInstance.setOption(pieOption);
        }
    }

    // ========== 替换原有热力图逻辑：仅显示地图标记点 ==========
    // 初始化百度地图（显示标记点）
    function initBaiduMapWithMarkers() {
        // 检查百度地图脚本是否加载
        if (!window.BMap) {
            console.error("百度地图脚本未加载完成");
            // 如果脚本未加载，延迟重试
            setTimeout(() => {
                initBaiduMapWithMarkers();
            }, 500);
            return;
        }
        
        // 确保地图容器可见
        const mapContainer = document.getElementById('baiduMap');
        if (!mapContainer) {
            console.error('百度地图容器不存在');
            return;
        }
        
        // 检查容器是否可见
        if (mapContainer.offsetParent === null) {
            console.log('地图容器当前不可见，等待显示后初始化');
            // 如果容器不可见，等待一段时间后重试
            setTimeout(() => {
                initBaiduMapWithMarkers();
            }, 300);
            return;
        }

        // 1. 初始化地图
        const map = new BMap.Map("baiduMap");
        const centerPoint = new BMap.Point(113.264385, 23.12911); // 广州中心点
        map.centerAndZoom(centerPoint, 13); // 13级缩放
        map.enableScrollWheelZoom(true); // 允许滚轮缩放
        window.baiduMapInstance = map;
        console.log("✅ 地图初始化成功");
        
        // 等待一会儿确保地图容器渲染完成
        setTimeout(() => {
            // 触发地图大小调整事件，确保地图正确渲染
            map.checkResize();
            
            // 2. 清空原有覆盖物（避免刷新重复）
            map.clearOverlays();

            // 3. 获取地址列表并解析成标记点
            fetch("/api/house/address-list")
                .then(res => res.json())
                .then(data => {
                    console.log("地址接口原始返回：", data);
                    console.log("地址列表：", data.data);
                    console.log("地址列表长度：", data.data ? data.data.length : "无data字段");
                    if (data.code !== 200) throw new Error(data.msg || "数据获取失败");
                    const addressList = data.data || [];

                    // 无地址数据时显示默认标记点
                    if (addressList.length === 0) {
                        addMarker(map, centerPoint, "默认位置", "暂无房源地址数据");
                        return;
                    }

                    // 批量解析地址
                    const geocoder = new BMap.Geocoder();
                    let successCount = 0;
                    let failCount = 0;

                    addressList.forEach((address, index) => {
                        // 延迟解析，避免接口限流
                        setTimeout(() => {
                            geocoder.getPoint(address, function(point) {
                                if (point) {
                                    successCount++;
                                    // 添加标记点，显示房源信息
                                    addMarker(map, point, `房源${index+1}`, address);
                                    
                                    // 如果是第一个成功解析的点，调整地图视野到该点附近
                                    if (successCount === 1) {
                                        map.setCenter(point);
                                        map.setZoom(14);
                                    }
                                } else {
                                    failCount++;
                                    console.error(`解析地址失败：${address}`);
                                }
                            }, "广州市"); // 限定广州范围解析，提高准确率
                        }, index * 100); // 每个地址间隔100ms
                    });

                    console.log(`地址解析完成：成功${successCount}个，失败${failCount}个`);
                })
                .catch(err => {
                    console.error("获取地址列表失败：", err);
                    // 失败时显示默认标记点
                    addMarker(map, centerPoint, "加载失败", "无法获取地址数据");
                });
        }, 100); // 等待地图渲染完成
    }

    // 封装添加标记点的函数
    function addMarker(map, point, title, address) {
        // 1. 创建标记点（默认样式，可自定义）
        const marker = new BMap.Marker(point);
        map.addOverlay(marker);

        // 2. 创建信息窗口（点击标记点显示）
        const infoWindow = new BMap.InfoWindow(`
            <div style="padding: 8px; font-size: 14px; line-height: 1.5;">
                <h5 style="margin:0 0 5px 0; color:#333;">${title}</h5>
                <p style="margin:0; color:#666;">地址：${address}</p>
            </div>
        `);

        // 3. 绑定点击事件：显示信息窗口
        marker.addEventListener("click", function() {
            map.openInfoWindow(infoWindow, point);
        });

        // 4. 鼠标悬浮显示标题
        marker.setTitle(title);
    }

    // 初始化图表（避免刷新按钮报错）
    function initCharts() {
        // 重新初始化图表实例
        initChartsInstance();
        loadDataAndInitBarChart();
        loadDataAndInitPieChart();
    }
});