package com.zx.common;

import com.zx.entity.User;
import com.zx.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.EventListener;
import org.springframework.security.authentication.RememberMeAuthenticationToken;
import org.springframework.security.authentication.event.InteractiveAuthenticationSuccessEvent;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Component
@Slf4j
public class RememberMeSuccessListener {

    @Autowired
    private UserService userService;

    @EventListener
    public void handleInteractiveAuthenticationSuccess(InteractiveAuthenticationSuccessEvent event) {
        Authentication authentication = event.getAuthentication();

        // 检查是否是记住我认证
        if (authentication instanceof RememberMeAuthenticationToken) {
            String username = authentication.getName();
            log.info("🎯 记住我自动登录事件触发，用户: {}", username);

            try {
                // 获取当前请求
                ServletRequestAttributes attributes =
                        (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();

                if (attributes != null) {
                    HttpServletRequest request = attributes.getRequest();

                    // 查询用户信息
                    User user = userService.findByUsername(username);
                    if (user != null) {
                        user.setPasswd(null);

                        // 设置session
                        HttpSession session = request.getSession();
                        session.setAttribute("loginUser", user);
                        session.setMaxInactiveInterval(3600);

                        log.info("✅ 记住我监听器设置session成功: {}", user.getUsername());
                    }
                }
            } catch (Exception e) {
                log.error("❌ 记住我设置session失败", e);
            }
        }
    }
}
