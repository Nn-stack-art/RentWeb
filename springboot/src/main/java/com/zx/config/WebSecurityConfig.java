package com.zx.config;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.zx.common.JsonLoginFilter;
import com.zx.entity.User;
import com.zx.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.rememberme.JdbcTokenRepositoryImpl;
import org.springframework.security.web.authentication.rememberme.PersistentTokenRepository;

import javax.sql.DataSource;

@Configuration
@EnableGlobalMethodSecurity(securedEnabled = true)
public class WebSecurityConfig {

    @Lazy
    @Autowired
    private UserService userService;

    @Autowired
    private DataSource dataSource;
    /**
     * 配置 BCrypt 密码加密器（全局复用，业务层直接注入）
     */
    @Bean
    public PasswordEncoder passwordEncoder() {

        return new BCryptPasswordEncoder();
    }

    @Bean
    public PersistentTokenRepository persistentTokenRepository() {
        System.out.println("配置PersistentTokenRepository");
        JdbcTokenRepositoryImpl tokenRepository = new JdbcTokenRepositoryImpl();
        tokenRepository.setDataSource(dataSource);

        return tokenRepository;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }


    /**
     * 配置 Security 过滤器链：控制接口访问权限、跨域、登录行为等
     * 目前先配置「放行所有接口」（方便你测试登录注册和收藏功能），后续再细化权限
     */
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .authorizeRequests()
                .antMatchers("/user/login", "/user/register").permitAll()
                .antMatchers(
                        "/static/**",
                        "/css/**",
                        "/js/**",
                        "/imgs/**",
                        "/fonts/**",
                        "/favicon.ico"
                ).permitAll()
                .antMatchers(HttpMethod.POST, "/user/doLogin", "/user/register").permitAll()
                .anyRequest().authenticated()
                .and()
                .formLogin()
                .loginPage("/user/login")
                .loginProcessingUrl("/user/doLogin")
                .successHandler((request, response, authentication) -> {
                    // 登录成功，设置session
                    String username = authentication.getName();

                    // 这里需要查询用户信息
                    User user = userService.findByUsername(username);
                    if (user != null) {
                        request.getSession().setAttribute("loginUser", user);
                        request.getSession().setMaxInactiveInterval(3600);
                        System.out.println("Security登录成功，设置session: " + username);
                    }
                    response.sendRedirect("/");
                })
                .failureUrl("/user/login?error=true")
                .and()
                .logout()  // Spring Security登出
                .logoutUrl("/user/logout")
                .logoutSuccessUrl("/user/login?logout=true")
                .invalidateHttpSession(true)
                .deleteCookies("JSESSIONID", "remember-me")
                .and()
                .rememberMe()  // 记住我配置
                .key("uniqueAndSecret")  // 加密密钥
                .tokenValiditySeconds(86400)  // 24小时
                .rememberMeParameter("rememberMe")  // 对应checkbox的name
                .tokenRepository(persistentTokenRepository())  // 使用数据库存储
        ;

        return http.build();
    }
}