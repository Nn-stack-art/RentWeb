package com.zx.service.impl;

import com.zx.entity.User;
import com.zx.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserService userService;  // 你的用户服务

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // 1. 从数据库查询用户
        User user = userService.findByUsername(username);

        if (user == null) {
            throw new UsernameNotFoundException("用户不存在: " + username);
        }

        // 2. 创建Spring Security的UserDetails对象
        return org.springframework.security.core.userdetails.User
                .withUsername(user.getUsername())
                .password(user.getPasswd())  // 数据库中的加密密码
                .authorities(user.getIdentity() == 1 ? "ROLE_ADMIN" : "ROLE_USER")
                .accountExpired(false)
                .accountLocked(false)
                .credentialsExpired(false)
                .disabled(false)
                .build();
    }
}