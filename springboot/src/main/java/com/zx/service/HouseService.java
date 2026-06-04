package com.zx.service;

import com.zx.common.Result;
import com.zx.dto.HouseQueryDTO;
import com.zx.dto.HouseVO;
import org.springframework.data.domain.Page;


public interface HouseService {

    /**
     * 根据ID查询房源详情
     */
    Result<HouseVO> queryHouseById(String houseId);

    /**
     * 多条件分页查询房源（支持区域、detailplace、租金、户型、朝向）
     * @param queryDTO 筛选条件
     * @param pageNum 页码（默认1）
     * @param pageSize 每页条数（默认10）
     * @return 分页房源列表（HouseVO）
     */
    Result<Page<HouseVO>> queryHousePage(HouseQueryDTO queryDTO, Integer pageNum, Integer pageSize);

}
