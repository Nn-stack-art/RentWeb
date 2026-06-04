package com.zx.service.impl;

import com.mongodb.client.MongoCollection;
import com.zx.common.Result;
import com.zx.dto.DistrictPriceVO;
import com.zx.dto.HouseQueryDTO;
import com.zx.dto.HouseVO;
import com.zx.entity.MongoHouse;
import com.zx.repository.HouseRepository;
import com.zx.service.HouseService;
import org.bson.Document;
import org.bson.types.ObjectId;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.math.BigDecimal;
import java.util.*;

@Service
public class HouseServiceImpl implements HouseService {
    @Autowired
    private MongoTemplate mongoTemplate;
    @Resource
    private HouseRepository houseRepository;

    @Override
    public Result<HouseVO> queryHouseById(String houseId) {
        System.out.println("查询参数：" + houseId);

        // 1. 先去除字符串前后空格（避免隐藏字符问题）
        houseId = houseId.trim();

        // 2. 尝试用 ObjectId 查询（适配数据库 _id 是 ObjectId 类型的情况）
        MongoHouse house;
        try {
            ObjectId objectId = new ObjectId(houseId);
            MongoCollection<Document> collection = mongoTemplate.getCollection("gz_rent_houses");

            Document doc = collection.find(new Document("_id", objectId)).first();
            System.out.println("查询结果：" + doc);

            house = new MongoHouse();
            // 1. id：ObjectId 转 String（前端需要的格式）
            house.setId(objectId.toString());
            // 2. 其他字段：从 Document 中按数据库字段名取值（和 MongoHouse 字段对应）
            house.setTitle(doc.getString("title"));
            house.setArea(doc.getString("area"));
            house.setDetailPlace(doc.getString("detailplace")); // 数据库字段是 detailplace
            Object squareObj = doc.get("square");
            if (squareObj != null) {
                // 如果是 Double、Integer 等数字类型
                house.setSquare(BigDecimal.valueOf(((Number) squareObj).doubleValue()));
            } else {
                house.setSquare(BigDecimal.ZERO);
            }
            house.setPosition(doc.getString("position"));
            house.setRoomType(doc.getString("roomtype")); // 数据库字段是 roomtype
            Object priceObj = doc.get("price");
            if (priceObj != null) {
                house.setPrice(BigDecimal.valueOf(((Number) priceObj).doubleValue()));
                System.out.println("原类型为："+ "Number");
            } else {
                house.setPrice(BigDecimal.ZERO);
            }
            System.out.println("查询结果：" + house);
        } catch (IllegalArgumentException e) {
            // 3. 如果 ObjectId 格式错误，尝试用字符串查询（适配数据库 _id 是 String 类型的情况）
            System.out.println("ObjectId 格式错误，尝试字符串查询：" + e.getMessage());
            house = mongoTemplate.findById(houseId, MongoHouse.class);
        }

        // 4. 处理查询结果
        if (house != null) {
            HouseVO houseVO = new HouseVO();
            BeanUtils.copyProperties(house, houseVO);
            // 关键：把 ObjectId 转成 String 给前端（避免前端接收 ObjectId 格式问题）
            houseVO.setId(house.getId().toString());
            return Result.success("查询成功！", houseVO);
        } else {
            return Result.error("房源不存在！");
        }
    }

    @Override
    public Result<Page<HouseVO>> queryHousePage(HouseQueryDTO queryDTO, Integer pageNum, Integer pageSize) {
        pageNum = (pageNum == null || pageNum < 1) ? 1 : pageNum;
        pageSize = (pageSize == null || pageSize < 1) ? 9 : pageSize;

        // 构建分页条件（Spring Data 的 Pageable，MongoDB 分页用）
        // 注意：MongoDB 页码从0开始，所以 pageNum-1；排序按价格降序（可按需改）
        Pageable pageable = PageRequest.of(
                pageNum - 1,
                pageSize,
                Sort.by(Sort.Direction.ASC, "price")
        );
        // 提取查询条件（避免重复调用 get 方法，提高可读性）
        String areaKeyword = queryDTO.getAreaKeyword();
        String detailplace = queryDTO.getDetailplace();
        BigDecimal minPrice = queryDTO.getMinPrice();
        BigDecimal maxPrice = queryDTO.getMaxPrice();
        String roomTypeKeyword = queryDTO.getRoomTypeKeyword();
        String position = queryDTO.getPosition();
        // 3. 核心查询
        Page<MongoHouse> housePage;
        // 3. 动态构建查询条件（Criteria：MongoDB 条件构造器）
        Criteria criteria = new Criteria();

        // 条件1：区域模糊匹配（传了就加）
        if (hasValue(areaKeyword)) {
            criteria.and("area").regex(areaKeyword, "i"); // "i" 忽略大小写
        }

        // 条件2：详细地址模糊匹配（传了就加）
        if (hasValue(detailplace)) {
            criteria.and("detailplace").regex(detailplace, "i");
        }

        Integer minPriceInt = null;
        Integer maxPriceInt = null;

        // 转换最小价格（仅有效数值才转换）
        if (hasValue(minPrice)) {
            // 校验BigDecimal是否在Integer范围内，避免溢出
            if (minPrice.compareTo(BigDecimal.valueOf(Integer.MAX_VALUE)) <= 0
                    && minPrice.compareTo(BigDecimal.ZERO) > 0) {
                minPriceInt = minPrice.intValue();
            } else {
                // 超出范围时可抛异常或设为Integer最大值，根据业务选择
                throw new IllegalArgumentException("最低价格超出有效范围（1-" + Integer.MAX_VALUE + "）：" + minPrice);
                // 兜底方案：minPriceInt = Integer.MAX_VALUE;
            }
        }

        // 转换最大价格
        if (hasValue(maxPrice)) {
            if (maxPrice.compareTo(BigDecimal.valueOf(Integer.MAX_VALUE)) <= 0
                    && maxPrice.compareTo(BigDecimal.ZERO) > 0) {
                maxPriceInt = maxPrice.intValue();
            } else {
                throw new IllegalArgumentException("最高价格超出有效范围（1-" + Integer.MAX_VALUE + "）：" + maxPrice);
                // 兜底方案：maxPriceInt = Integer.MAX_VALUE;
            }
        }

        // 条件3：价格区间（传了min就加≥，传了max就加≤，都传就区间）
        if (hasValue(minPrice) && hasValue(maxPrice)) {
            criteria.and("price").gte(minPriceInt).lte(maxPriceInt); // 区间：min≤price≤max
        } else if (hasValue(minPrice)) {
            criteria.and("price").gte(minPriceInt); // 只传min：price≥min
        } else if (hasValue(maxPrice)) {
            criteria.and("price").lte(maxPriceInt); // 只传max：price≤max
        }
        System.out.println("查询条件：价格转换后" + minPriceInt + "≤price≤" + maxPriceInt);
        // 条件4：户型模糊匹配（传了就加）
        if (hasValue(roomTypeKeyword)) {
            criteria.and("roomtype").regex(roomTypeKeyword, "i");
        }

        // 条件5：朝向精准匹配（传了就加）
        if (hasValue(position)) {
            criteria.and("position").is(position);
        }

        Query query = Query.query(criteria);
        long total = mongoTemplate.count(query, MongoHouse.class);
        query.skip((long) pageNum * pageSize).limit(pageSize);
        List<MongoHouse> houseList = mongoTemplate.find(query, MongoHouse.class);

        Pageable actualPageable = PageRequest.of(pageNum, pageSize);

// 7. 转换为 VO 分页返回（用新的 actualPageable，不是原来的 pageable）
        housePage = new PageImpl<>(houseList, actualPageable, total);
        Page<HouseVO> voPage = housePage.map(house -> {
            HouseVO houseVO = new HouseVO();
            BeanUtils.copyProperties(house, houseVO);
            return houseVO;
        });
        return Result.success("房源查询成功", voPage);
    }

    //判断参数是否有效，便于后续代码的便利性
    private boolean hasValue(Object obj) {
        if (obj == null) {
            return false; // 参数为null → 无效
        }
        // 如果是字符串：判断是否为空或纯空白（比如 "  " 也视为无效）
        if (obj instanceof String) {
            return !((String) obj).trim().isEmpty();
        }
        // 其他类型（BigDecimal、Long等）：非null即有效
        return true;
    }



}
