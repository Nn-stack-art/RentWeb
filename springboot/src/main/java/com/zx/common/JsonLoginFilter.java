package com.zx.common;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;

public class JsonLoginFilter extends UsernamePasswordAuthenticationFilter {
    private final ObjectMapper objectMapper = new ObjectMapper();

    public JsonLoginFilter(AuthenticationManager authenticationManager) {
        super(authenticationManager);
        super.setFilterProcessesUrl("/user/doLogin"); // 匹配你的登录接口
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
            throws AuthenticationException {
        try {
            // 解析 JSON 参数（和之前一致）
            InputStream inputStream = request.getInputStream();
            Map<String, String> loginParams = objectMapper.readValue(inputStream, Map.class);

            String username = loginParams.get("username");
            String password = loginParams.get("password");

            // 校验用户名/密码非空
            if (username == null || password == null) {
                throw new AuthenticationServiceException("用户名或密码不能为空");
            }

            UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(username, password);
            return this.getAuthenticationManager().authenticate(authToken);
        } catch (IOException e) {
            throw new AuthenticationServiceException("解析 JSON 登录参数失败", e);
        }
    }

    // 登录成功：用 HashMap 替代 Map.of()（兼容 Java 8，支持 null）
    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response,
                                            javax.servlet.FilterChain chain, Authentication authResult) throws IOException {
        response.setContentType("application/json;charset=UTF-8");
        // 改用 HashMap，兼容 Java 8 且支持 value 为 null
        Map<String, Object> successMap = new HashMap<>();
        successMap.put("code", 200);
        successMap.put("msg", "登录成功");
        successMap.put("data", null); // 支持 null 值
        response.getWriter().write(objectMapper.writeValueAsString(successMap));
    }

    // 登录失败：同样用 HashMap 替代 Map.of()
    @Override
    protected void unsuccessfulAuthentication(HttpServletRequest request, HttpServletResponse response,
                                              AuthenticationException failed) throws IOException {
        response.setContentType("application/json;charset=UTF-8");
        Map<String, Object> failMap = new HashMap<>();
        failMap.put("code", 500);
        // 兼容不同异常类型，返回具体提示
        if (failed instanceof UsernameNotFoundException) {
            failMap.put("msg", failed.getMessage());
        } else {
            failMap.put("msg", "登录失败：" + failed.getMessage());
        }
        failMap.put("data", null);
        response.getWriter().write(objectMapper.writeValueAsString(failMap));
    }
}