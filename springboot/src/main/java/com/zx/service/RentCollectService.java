package com.zx.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.zx.entity.RentCollection;

import java.util.List;

public interface RentCollectService extends IService<RentCollection> {


    Boolean isCollected(String userId, String houseId);

    /**
     * 切换收藏状态
     * @param houseId 房源ID
     * @param userId 用户ID
     * @return 操作结果信息
     */
    String toggleCollection(String userId, String houseId);

    /**
     * 根据用户ID查询收藏列表
     * @param userId 用户ID
     * @return 收藏列表
     */
    List<RentCollection> findByUserId(String userId);
}
