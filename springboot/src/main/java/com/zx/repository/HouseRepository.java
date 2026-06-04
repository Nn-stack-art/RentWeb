package com.zx.repository;

import com.zx.entity.MongoHouse;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface  HouseRepository extends MongoRepository<MongoHouse, String> {
    Page<MongoHouse> findAll(Pageable pageable);

}
