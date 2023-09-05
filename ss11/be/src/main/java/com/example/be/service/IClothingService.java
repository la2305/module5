package com.example.be.service;

import com.example.be.model.Clothing;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IClothingService {
    Page<Clothing> findAll(Pageable pageable,String name);
    void delete(int id);
}
