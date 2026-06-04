// 页面加载完成后执行
$(function() {
    // 1. 从 URL 提取 houseId
    const urlParams = new URLSearchParams(window.location.search);
    const houseId = urlParams.get('id');

    // 2. 校验 id 是否存在
    if (!houseId) {
        alert('房源ID不存在，无法查看详情！');
        window.history.back();
        return;
    }

    function initCollectionStatus() {
        if (!houseId) return;

        $.ajax({
            url: '/collection/check', // 新增：后端查询收藏状态接口
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                houseId: houseId // 只传房源ID
            }),
            success: function(result) {
                if (result.code === 200) {
                    const isCollected = result.data;
                    console.log("isCollected"+ isCollected)
                    if (isCollected){
                        $('#houseCollected').text('已收藏');
                        $('#collectBtn').html('<i class="bi bi-heart-fill"></i> 已收藏');
                    }else{
                        $('#houseCollected').text('未收藏');
                        $('#collectBtn').html('<i class="bi bi-heart"></i> 收藏房源');
                    }
                }
            }
        });
    }


    // 3. 发起 AJAX 请求获取详情数据
    $.ajax({
        url: `/house/detail?id=${houseId}`, // 后端接口地址（保持不变）
        type: 'GET',
        dataType: 'json',
        success: function(result) {
            // 4. 适配后端返回格式（code=200 且有数据）
            if (result.code === 200 && result.data) {
                const house = result.data;
                renderHouseData(house); // 分离渲染逻辑，更清晰
                initCollectionStatus();
            } else {
                alert(result.message || '获取房源详情失败！');
                window.history.back();
            }
        },
        error: function() {
            alert('网络错误，无法获取房源详情！');
            window.history.back();
        }
    });

    $('#collectBtn').click(function(e) { // 新增 e 参数（事件对象）
        // 关键：阻止浏览器默认行为（避免表单提交/页面跳转）
        e.preventDefault();

        $.ajax({
            url: '/collection/toggle',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ houseId: houseId }),
            xhrFields: {
                withCredentials: true // 保持之前的配置，确保携带 Cookie
            },
            crossDomain: true,
            success: function(result) {
                if (result.code === 200) {
                    alert(result.data);
                    initCollectionStatus();
                    // // 收藏成功后，手动更新页面状态（不用刷新页面）
                    // const isCollected = result.data.includes('收藏成功');
                    // if (isCollected) {
                    //     $('#houseCollected').text('已收藏');
                    //     $('#collectBtn').html('<i class="bi bi-heart-fill"></i> 已收藏');
                    // } else{
                    //     $('#houseCollected').text('未收藏'); // 取消收藏后，手动改为未收藏
                    //     $('#collectBtn').html('<i class="bi bi-heart"></i> 收藏房源');
                    // }
                } else {
                    alert(result.message);
                }
            },
            error: function(xhr) {
                console.log("收藏请求失败：", xhr.responseText); // 打印报错信息，方便排查
                alert("收藏操作失败，请重试！");
            }
        });
    });

    // 6. 渲染房源数据（独立函数，便于维护）
    function renderHouseData(house) {
        // 标题
        $('#houseTitle').text(house.title || '未知房源');
        $('#houseTitleDetail').text(house.title || '未知房源');

        // 价格（千分位格式化）
        const price = house.price || 0;
        const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        $('#housePrice').text(formattedPrice);
        $('#housePriceDetail').text(`${formattedPrice} 元/月`);

        // 地区
        $('#houseArea').text(house.area || '未知地区');
        $('#houseAreaDetail').text(house.area || '未知');

        // 详细地址
        $('#houseDetailPlace').text(house.detailPlace || '未知地址');
        $('#houseDetailPlaceDetail').text(house.detailPlace || '未知');

        // 面积（保留2位小数）
        const square = house.square || 0;
        const formattedSquare = square.toFixed(2);
        $('#houseSquare').text(formattedSquare);
        $('#houseSquareDetail').text(`${formattedSquare} ㎡`);

        // 朝向
        $('#housePosition').text(house.position || '未知朝向');
        $('#housePositionDetail').text(house.position || '未知');

        // 房型
        $('#houseRoomType').text(house.roomType || '未知房型');
        $('#houseRoomTypeDetail').text(house.roomType || '未知');

        // 收藏状态（处理 null）
        if (house.isCollected !== null && house.isCollected !== undefined) {
            $('#houseCollected').text(house.isCollected ? '已收藏' : '未收藏');
            $('#collectBtn').html(house.isCollected ?
                '<i class="bi bi-heart-fill"></i> 已收藏' :
                '<i class="bi bi-heart"></i> 收藏房源'
            );
        }
    }
});