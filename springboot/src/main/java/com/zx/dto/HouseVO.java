package com.zx.dto;

import lombok.Data;
import java.math.BigDecimal;

/**
 * 房源展示 VO（返回给前端的数据格式，隐藏不必要字段）
 */
@Data
public class HouseVO {
    // 基础字段（和 MongoHouse 对齐）
    private String id; // 房源ID

    private String title; // 房源标题（如“整租·倾城酒店 1室0厅”）

    private String area; // 区域（如“西南 越秀”）

    private String detailPlace; // 详细地址（如“盘福”）

    private BigDecimal square; // 面积（如 56.01 ㎡）

    private String position; // 朝向（如“西”）

    private String roomType; // 户型（如“1室0厅1卫”）

    private BigDecimal price; // 租金（如 3500.00 元）

    // 扩展展示字段
    private Boolean isCollected; // 是否被当前用户收藏（关联收藏模块）
}