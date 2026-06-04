package com.zx.service.impl;

import com.zx.dto.DistrictPriceVO;
import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class HouseDataServiceImpl {

    @Autowired
    private MongoTemplate mongoTemplate;

    public DistrictPriceVO getDistrictPriceList() {
        DistrictPriceVO vo = new DistrictPriceVO();
        try {
            // 执行聚合查询
            List<Document> stats = getAreaStats();
            // 转换为VO
            return convertToDistrictPriceVO(stats);
        } catch (Exception e) {
            System.out.println("获取统计数据失败");
            return vo;
        }
    }
    private List<Document> getAreaStats() {
        List<Document> pipeline = Arrays.asList(
                Document.parse("{ $match: { 'price': { $gte : 500 } } }"),
                Document.parse("{ $group: { " +
                        "_id: '$area', " +
                        "avgPrice: { $avg: '$price' }, " +
                        "minPrice: { $min: '$price' }, " +
                        "maxPrice: { $max: '$price' } " +
                        "} }")
        );
        System.out.println("pipeline的数据为："+pipeline);
        return mongoTemplate.getCollection("gz_rent_houses")
                .aggregate(pipeline)
                .into(new ArrayList<>());
    }


    private DistrictPriceVO convertToDistrictPriceVO(List<Document> stats) {
        DistrictPriceVO vo = new DistrictPriceVO();
        vo.setDistrictList(new ArrayList<>());
        vo.setAvgPriceList(new ArrayList<>());
        vo.setMinPriceList(new ArrayList<>());
        vo.setMaxPriceList(new ArrayList<>());

        // 广州11个区标准顺序
        String[] districts = {"天河", "越秀", "荔湾", "海珠", "白云",
                "黄埔", "番禺", "花都", "南沙", "从化", "增城"};

        Map<String, Document> statsMap = new HashMap<>();
        for (Document doc : stats) {
            String district = doc.getString("_id");
            if (district != null && !district.isEmpty()) {
                statsMap.put(district, doc);
                System.out.println("映射区域: " + district);
            }
        }
        // 填充数据
        for (String district : districts) {
            vo.getDistrictList().add(district);

            Document doc = statsMap.get(district);
            if (doc != null) {
                int avgPrice = getIntFromDocument(doc, "avgPrice");
                int minPrice = getIntFromDocument(doc, "minPrice");
                int maxPrice = getIntFromDocument(doc, "maxPrice");

                vo.getAvgPriceList().add(avgPrice);
                vo.getMinPriceList().add(minPrice);
                vo.getMaxPriceList().add(maxPrice);
            } else {
                vo.getAvgPriceList().add(0);
                vo.getMinPriceList().add(0);
                vo.getMaxPriceList().add(0);
            }
        }
        System.out.println("vo的数据为："+vo);
        return vo;
    }

    private int getIntFromDocument(Document doc, String key) {
        try {
            if (!doc.containsKey(key)) {
                return 0;
            }

            Object value = doc.get(key);
            if (value == null) {
                return 0;
            }

            // 如果是Double，强转为int（会截断小数）
            if (value instanceof Double) {
                return ((Double) value).intValue();  // 直接强转
            }

            // 如果是Integer，直接返回
            if (value instanceof Integer) {
                return (Integer) value;
            }

            // 如果是Float，强转
            if (value instanceof Float) {
                return ((Float) value).intValue();
            }

            // 如果是Long，强转
            if (value instanceof Long) {
                return ((Long) value).intValue();
            }

            // 如果是String，尝试解析
            if (value instanceof String) {
                return Integer.parseInt((String) value);
            }

            // 其他Number类型
            if (value instanceof Number) {
                return ((Number) value).intValue();
            }

        } catch (Exception e) {
            System.out.println("转换" + key + "失败: " + e.getMessage());
        }

        return 0;
    }

    public List<Integer> getRoomTypeList() {
        List<Integer> roomTypeList = new ArrayList<>();
        try {
            List<Document> stats = getRoomTypeStats();
            for(Document doc : stats){
                System.out.println( "房型: " + doc.getString("_id") + ", 数量: " + doc.getInteger("count"));
            }
            for (Document doc : stats) {
                int count = doc.getInteger("count");
                roomTypeList.add(count);
            }
            return roomTypeList;
        } catch (Exception e) {
            System.out.println("获取统计数据失败");
            return roomTypeList;
        }
    }

    private List<Document> getRoomTypeStats() {
        // 使用Document.parse解析JSON字符串
        List<Document> pipeline = Arrays.asList(
                Document.parse("{ $match: { roomtype: { $regex: '^[0-9]+室' } } }"),

                Document.parse("{ $group: { " +
                        "_id: { " +
                        "  $switch: { " +
                        "    branches: [ " +
                        "      { case: { $regexMatch: { input: '$roomtype', regex: '^1室' } }, then: '1室' }, " +
                        "      { case: { $regexMatch: { input: '$roomtype', regex: '^2室' } }, then: '2室' }, " +
                        "      { case: { $regexMatch: { input: '$roomtype', regex: '^3室' } }, then: '3室' }, " +
                        "      { case: { $regexMatch: { input: '$roomtype', regex: '^[4-9]室' } }, then: '4室及以上' } " +
                        "    ], " +
                        "    default: '其他' " +
                        "  } " +
                        "}, " +
                        "count: { $sum: 1 } " +
                        "} }"),

                Document.parse("{ $match: { _id: { $ne: '其他' } } }"),

                Document.parse("{ $sort: { _id: 1 } }")
        );

        System.out.println("聚合管道: " + pipeline);

        return mongoTemplate.getCollection("gz_rent_houses")
                .aggregate(pipeline)
                .into(new ArrayList<>());
    }


}
