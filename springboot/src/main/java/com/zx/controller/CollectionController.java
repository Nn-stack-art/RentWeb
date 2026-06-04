package com.zx.controller;

import com.zx.common.Result;
import com.zx.dto.HouseVO;
import com.zx.entity.RentCollection;
import com.zx.entity.User;
import com.zx.service.HouseService;
import com.zx.service.RentCollectService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/collection")
public class CollectionController {

    @Autowired
    private RentCollectService rentCollectService;

    @Autowired
    private HouseService houseService;

    @PostMapping("/toggle")
    public Result<String> toggleCollect(@RequestBody Map<String, String> request, HttpSession session) {
        User loginUser = (User) session.getAttribute("loginUser");
        String userId = loginUser.getUserId().toString();
        String houseId = request.get("houseId");
        // 调用 Service（传入 houseId 和 userId）
        try {
            String message = rentCollectService.toggleCollection(userId, houseId);

            return Result.success("操作成功", message);
        } catch (Exception e) {
            return Result.error("操作失败：" + e.getMessage());
        }
    }

    @PostMapping("/check")
    public Result<Boolean> checkCollection(@RequestBody Map<String, String> request, HttpSession session) {
        // 1. 从 Session 拿登录用户（未登录 → 返回 false）
        User loginUser = (User) session.getAttribute("loginUser");
        // 2. 拿到 userId（转成 String，适配 Service 方法参数）
        String userId  = loginUser.getUserId().toString();
        // 3. 从请求体拿 houseId（前端只传这个）
        String houseId = request.get("houseId");
        // 4. 调用 Service 查是否已收藏
        boolean isCollected = rentCollectService.isCollected(userId, houseId);

        if (isCollected) {
            return Result.success("已收藏",true);
        }else {
            return Result.success("未收藏",false);
        }
    }

    @GetMapping("/my-collections")
    public Result<List<HouseVO>> getMyCollection(HttpSession session) {
        User loginUser = (User) session.getAttribute("loginUser");
        String userId = loginUser.getUserId().toString();
        log.info("用户[{}]查询我的收藏", userId);
        try{
            List<RentCollection> rentCollections = rentCollectService.findByUserId(userId);
            // 4. 循环查询每个房源的详情（适配你的 houseService.queryHouseById 接口）
            List<HouseVO> houseVOS = new ArrayList<>();

            for (RentCollection rentCollection : rentCollections) {
                log.info("rentCollection:{}",rentCollection);
                String rentId = rentCollection.getRentId();
                Result<HouseVO> resultHouseVO = houseService.queryHouseById(rentId);
                // 校验房源查询结果（避免个别房源查询失败导致整体报错）
                if (resultHouseVO != null && resultHouseVO.getCode() == 200 && resultHouseVO.getData() != null) {
                    log.info("resultHouseVO"+ resultHouseVO);
                    houseVOS.add(resultHouseVO.getData());
                } else {
                    log.warn("房源ID[{}]查询失败，响应：{}", rentId, resultHouseVO);
                }
            }

            // 5. 返回结果（不管有没有房源，都返回 code=200，前端才能正常处理）
            log.info("用户[{}]收藏房源列表查询完成，共{}条", userId, houseVOS.size());
            return Result.success("查询成功", houseVOS);
        } catch (Exception e) {
            // 6. 全局异常捕获（避免接口返回 500，导致前端一直显示加载中）
            log.error("用户[{}]查询收藏列表异常", userId, e);
            return Result.error("查询收藏列表失败，请稍后重试");
        }
    }
}
