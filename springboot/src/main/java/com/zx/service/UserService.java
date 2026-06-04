package com.zx.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.zx.common.Result;
import com.zx.dto.LoginDTO;
import com.zx.dto.RegisterDTO;
import com.zx.entity.User;

public interface UserService extends IService<User> {
    /**
     * 用户注册
     * @param registerDTO 注册参数
     * @return 注册结果（含用户信息）
     */
    Result<User> register(User user);

    /**
     * 用户登录
     * @param loginDTO 登录参数
     * @return 登录结果（含用户信息）
     */
    Result<User> login(LoginDTO loginDTO);

    /**
     * 根据用户名查询用户
     * @param username 用户名
     * @return 用户信息
     */
    User findByUsername(String username);
}
