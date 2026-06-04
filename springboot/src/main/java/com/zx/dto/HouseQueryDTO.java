package com.zx.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
public class HouseQueryDTO {

    private String areaKeyword; // 区域关键词（如“西南 越秀”，模糊匹配）

    private String detailplace; // 详细地址（如“盘福”“张江”，精准/模糊匹配）

    private BigDecimal minPrice; // 最低价格

    private BigDecimal maxPrice; // 最高价格

    private String roomTypeKeyword; // 户型关键词（如“1室”“2室”，模糊匹配）

    private String position; // 朝向（如“南”“西南”，精准匹配）
}
