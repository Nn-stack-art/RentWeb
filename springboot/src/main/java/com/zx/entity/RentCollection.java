package com.zx.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@TableName("rent_collect")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class RentCollection implements Serializable {

    @TableId(type = IdType.AUTO, value = "collect_id")
    private Long collectId;

    /**
     * 用户ID
     */
    private Long userId;

    /**
     * 租金记录ID
     */
    private String rentId;
}
