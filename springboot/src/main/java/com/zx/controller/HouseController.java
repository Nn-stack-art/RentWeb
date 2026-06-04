package com.zx.controller;

import com.zx.common.Result;
import com.zx.dto.HouseQueryDTO;
import com.zx.dto.HouseVO;
import com.zx.entity.RentCollection;
import com.zx.service.HouseService;
import com.zx.service.RentCollectService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@Controller
@RequestMapping("/house")
@Slf4j
public class HouseController {

    @Autowired
    private HouseService houseService;

    @Autowired
    private RentCollectService rentCollectService;

    @ResponseBody
    @GetMapping("/page")
    public Result<?> queryHousePage(
            // 筛选条件（前端传参自动绑定到 DTO）
            HouseQueryDTO queryDTO,
            // 分页参数（默认第1页，每页10条）
            @RequestParam(required = false) Integer pageNum,
            @RequestParam(required = false) Integer pageSize
    ) {
        System.out.println("查询参数：" + queryDTO +"  分页参数："+ pageNum + "  " + pageSize);
        // 调用 Service 层，返回分页结果
        return houseService.queryHousePage(queryDTO, pageNum, pageSize);
    }

    @GetMapping("/detail-page")
    public String toDetailPage() {
        return "house-detail";
    }

    @ResponseBody
    @GetMapping("/detail")
    public Result<HouseVO> queryHouseById(@RequestParam(value = "id") String houseId) {
        return houseService.queryHouseById(houseId);
    }
}
