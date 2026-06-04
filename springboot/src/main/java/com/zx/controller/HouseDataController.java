package com.zx.controller;

import com.zx.common.Result;
import com.zx.dto.DistrictPriceVO;
import com.zx.service.impl.HouseDataServiceImpl;
import com.zx.service.impl.HouseServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/house")
public class HouseDataController {

    @Autowired
    private MongoTemplate mongoTemplate;

    @Autowired
    private HouseDataServiceImpl houseDataService;
    @GetMapping("/price")
    public Result<DistrictPriceVO> queryPrice() {
        DistrictPriceVO districtPriceVO = houseDataService.getDistrictPriceList();
        System.out.println(districtPriceVO);
        return Result.success("查询成功", districtPriceVO);
    }

    @GetMapping("/roomType")
    public Result<List<Integer>> queryRoomType() {
        return Result.success("查询成功", houseDataService.getRoomTypeList());
    }

    @GetMapping("/address-list")
    public Result<List<String>> getHouseAddressList() {
        Query query = new Query();
        query.fields().include("area").include("detailplace");
        List<String> fullAddresses = new ArrayList<>();
        mongoTemplate.find(query, org.bson.Document.class, "gz_rent_houses")
                .forEach(doc -> {
                    String area = doc.getString("area");
                    String detailplace = doc.getString("detailplace");

                    // 处理字段为空的情况，避免拼接出null或空字符串
                    String areaStr = (area != null && !area.isEmpty()) ? area : "";
                    String detailStr = (detailplace != null && !detailplace.isEmpty()) ? detailplace : "";

                    // 拼接两个字段（可根据需要调整拼接符，比如加空格/横线等）
                    String fullAddr ="广州市" +areaStr + "区"+detailStr;

                    // 仅保留拼接后非空的地址（避免两个字段都为空的情况）
                    if (!fullAddr.isEmpty()) {
                        fullAddresses.add(fullAddr);
                    }
                });
        System.out.println("addresses的数据为："+fullAddresses);
        return Result.success("查询成功", fullAddresses);
    }

}
