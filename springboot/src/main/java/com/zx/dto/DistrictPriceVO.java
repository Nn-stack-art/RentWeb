package com.zx.dto;

import lombok.Data;

import java.util.List;

@Data
public class DistrictPriceVO {
    private List<String> districtList;    // 11个区名称

    private List<Integer> avgPriceList;   // 对应均价

    private List<Integer> maxPriceList;   // 对应最高价

    private List<Integer> minPriceList;   // 对应最低价
}
