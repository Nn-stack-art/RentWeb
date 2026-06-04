package com.zx.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@TableName("user")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User implements Serializable {

    //用户id
    @TableId(type = IdType.AUTO, value = "user_id")
    private Integer userId;

    //姓名
    private String username;

    //密码
    private String passwd;

    //身份
    private Integer identity;

}
