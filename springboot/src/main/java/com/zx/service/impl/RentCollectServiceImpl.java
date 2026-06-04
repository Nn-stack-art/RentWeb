package com.zx.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.zx.entity.RentCollection;
import com.zx.mapper.RentCollectMapper;
import com.zx.service.RentCollectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class RentCollectServiceImpl extends ServiceImpl<RentCollectMapper, RentCollection> implements RentCollectService {

    @Autowired
    private RentCollectMapper rentCollectMapper;

    @Override
    public Boolean isCollected(String userId, String houseId) {

        Long userIdLong = Long.parseLong(userId);
        // 构建查询条件：userId = ? AND houseId = ?
        QueryWrapper<RentCollection> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("user_id", userIdLong) // 数据库字段名 user_id
                .eq("rent_id", houseId); // 数据库字段名 house_id

        // 调用 MP 的 baseMapper 方法查询（存在则返回 true）
        RentCollection collection = rentCollectMapper.selectOne(queryWrapper);
        return collection != null;
    }

    @Override
    @Transactional
    public String toggleCollection(String userId, String houseId) {
        boolean collected = isCollected(userId, houseId);

        if (collected) {
            Long userIdLong = Long.parseLong(userId);
            QueryWrapper<RentCollection> deleteWrapper = new QueryWrapper<>();
            deleteWrapper.eq("user_id", userIdLong)
                    .eq("rent_id", houseId);
            rentCollectMapper.delete(deleteWrapper);
            return "取消收藏成功！";
        } else {
            // 未收藏 → 新增收藏
            Long userIdLong = Long.parseLong(userId);
            RentCollection newCollection = new RentCollection();
            newCollection.setUserId(userIdLong);
            newCollection.setRentId(houseId);
            rentCollectMapper.insert(newCollection);
            return "收藏成功！";
        }


    }

    @Override
    public List<RentCollection> findByUserId(String userId) {
        LambdaQueryWrapper<RentCollection> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(RentCollection::getUserId, userId);
        List<RentCollection> rentCollections = this.list(queryWrapper);
        return rentCollections;
    }
}
