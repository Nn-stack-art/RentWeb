package com.zx.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.math.BigDecimal;

@Data
@Document(collection = "gz_rent_houses")
public class MongoHouse {

    @Id // MongoDB 主键（对应 _id 字段）
    @Field("id")
    private String id;

    @Field("title")
    private String title;

    @Field("area")
    private String area;

    @Field("detailplace")
    private String detailPlace;

    @Field("square")
    private BigDecimal square;

    @Field("position")
    private String position;

    @Field("roomtype")
    private String roomType;

    @Field("price")
    private BigDecimal price;

}
