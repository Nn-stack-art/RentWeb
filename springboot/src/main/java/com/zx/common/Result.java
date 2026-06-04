package com.zx.common;

import lombok.Data;

@Data
public class Result<T> {

    private int code;       // 状态码：200成功，500失败，401未登录（后续扩展）

    private String message; // 提示信息

    private T data;         // 响应数据（泛型兼容任意类型）

    public static <T> Result<T> success(String message, T data) {
        Result<T> result = new Result<>();
        result.setCode(200);
        result.setMessage(message);
        result.setData(data);
        return result;
    }

    public static <T> Result<T> error(String message) {
        Result<T> result = new Result<>();
        result.setCode(500);
        result.setMessage(message);
        result.setData(null);
        return result;
    }

    // 预留：后续登录失效可加
    public static <T> Result<T> unAuth(String message) {
        Result<T> result = new Result<>();
        result.setCode(401);
        result.setMessage(message);
        result.setData(null);
        return result;
    }
}
