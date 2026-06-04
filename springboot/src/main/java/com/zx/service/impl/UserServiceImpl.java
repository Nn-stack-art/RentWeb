package com.zx.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.zx.common.Result;
import com.zx.dto.LoginDTO;
import com.zx.dto.RegisterDTO;
import com.zx.entity.User;
import com.zx.mapper.UserMapper;
import com.zx.service.UserService;
import org.springframework.beans.BeanUtils;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;

@Service
@Transactional
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService{

    @Resource
    private UserMapper userMapper;

    @Resource
    private PasswordEncoder passwordEncoder;


    @Override
    @Transactional
    public Result<User> register(User user) {

        // 1.检查用户名是否已存在
        LambdaQueryWrapper<User> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(User::getUsername, user.getUsername());
        User existUser = userMapper.selectOne(queryWrapper);
        // 用户名已存在
        if (existUser != null) {
            return Result.error("用户名已被注册，请更换用户名");  // 改为返回Result
        }

        //2.密码加密
        String encodePasswd = passwordEncoder.encode(user.getPasswd());
        user.setPasswd(encodePasswd);
        // 设置用户身份User
        user.setIdentity(0);
        //4.保存用户信息到数据库
        this.save(user);
        // 5. 构建返回结果（隐藏密码，避免泄露）
        user.setPasswd(null); // 把密码设为 null，不返回给前端
        return Result.success("注册成功！", user);
    }

    @Override
    @Transactional
    public Result<User> login(LoginDTO loginDTO) {

        // 1. 根据用户名查询用户（和注册时的查询逻辑一致）
        User dbUser = userMapper.selectOne(new LambdaQueryWrapper<User>()
                .eq(User::getUsername, loginDTO.getUsername()));

        // 用户不存在
        if (dbUser == null) {
            throw new RuntimeException("用户名不存在，请检查用户名是否正确"); // 抛出异常
        }
        // 2. 校验密码
        boolean isPasswdMatch  = passwordEncoder.matches(loginDTO.getPasswd(), dbUser.getPasswd());
        // 密码不匹配，返回错误结果
        if (!isPasswdMatch) {
            throw new RuntimeException("密码错误，请重新输入"); // 抛出异常
        }
        // 4. 构建返回结果（隐藏密码）
        dbUser.setPasswd(null);
        return Result.success("登录成功！", dbUser);
    }

    @Override
    public User findByUsername(String username) {
        QueryWrapper queryWrapper = new QueryWrapper();
        queryWrapper.eq("username", username);
        return userMapper.selectOne(queryWrapper);
    }
}
