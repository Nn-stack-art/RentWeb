package com.zx.controller;

import com.zx.common.Result;
import com.zx.dto.LoginDTO;
import com.zx.dto.RegisterDTO;
import com.zx.entity.User;
import com.zx.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("/user")
@Validated
@Slf4j
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private AuthenticationManager authenticationManager;

    /**
     * 页面跳转：返回登录页面
     */
    @GetMapping("/login")
    public String loginPage(@RequestParam(required = false) String error,
                            @RequestParam(required = false) String logout,
                            HttpServletRequest request,
                            Model model) {

        log.info("登录页面，参数: error={}, logout={}", error, logout);

        // 处理登出成功消息
        if (logout != null) {
            model.addAttribute("successMsg", "您已成功退出登录");
        }

        // 处理登录失败消息
        if (error != null) {
            model.addAttribute("errorMsg", "用户名或密码错误");
        }

        return "login";
    }

    @GetMapping("/register")
    public String registerPage() {
        return "login";  // 返回登录页面，前端JS会切换到注册表单
    }

    /**
     * 注册接口（POST请求）
     * 访问地址：http://localhost:8080/user/register
     * 请求体：{"username":"test04","passwd":"123456"}
     */
    // 处理注册（POST）
    @PostMapping("/register")
    @ResponseBody
    public Result<Map<String, Object>> register(@RequestBody RegisterDTO registerDTO) {
        try {
            User user = new User();
            user.setUsername(registerDTO.getUsername());
            user.setPasswd(registerDTO.getPasswd());

            Result<User> result = userService.register(user);

            if (result.getCode() == 200) {
                // 返回更多信息给前端
                Map<String, Object> data = new HashMap<>();
                data.put("user", result.getData());
                data.put("username", registerDTO.getUsername());  // 给前端填充用

                return Result.success("注册成功，请登录", data);
            }

            return Result.error(result.getMessage());

        } catch (Exception e) {
            return Result.error("注册失败: " + e.getMessage());
        }
    }
}