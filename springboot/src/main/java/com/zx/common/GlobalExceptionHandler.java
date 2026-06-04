package com.zx.common;

import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {
    /**
     * 处理参数校验失败异常（@NotBlank、@Size 等注解触发的异常）
     */
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Result<Void> handleValidException(MethodArgumentNotValidException e) {
        BindingResult bindingResult = e.getBindingResult();
        StringBuilder errorMsg = new StringBuilder();

        // 遍历所有校验失败的字段，拼接错误信息（比如：用户名不能为空；密码长度6-20字符）
        for (FieldError fieldError : bindingResult.getFieldErrors()) {
            errorMsg.append(fieldError.getDefaultMessage()).append("；");
        }

        // 返回统一错误格式（code=500，message=拼接的错误信息）
        return Result.error(errorMsg.toString().trim());
    }

    /**
     * 处理业务异常（比如用户名已存在、密码错误等我们手动 throw 的异常）
     */
    @ExceptionHandler(RuntimeException.class)
    public Result<Void> handleBusinessException(RuntimeException e) {
        // 直接返回我们手动抛出的异常信息
        return Result.error(e.getMessage());
    }

    /**
     * 处理其他所有未捕获的异常（兜底，避免返回默认错误页面）
     */
    @ExceptionHandler(Exception.class)
    public Result<Void> handleException(Exception e) {
        // 生产环境可以打印日志，这里返回通用错误信息
        e.printStackTrace(); // 开发环境打印异常栈，方便调试
        return Result.error("系统繁忙，请稍后再试");
    }
}
