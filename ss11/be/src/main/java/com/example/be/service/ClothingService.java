package com.example.be.service;

import com.example.be.model.Clothing;
import com.example.be.repository.IClothingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ClothingService implements IClothingService{
    @Autowired
    private IClothingRepository clothingRepository;

    @Override
    public Page<Clothing> findAll(Pageable pageable, String name) {
        return clothingRepository.findAllClothing(pageable,name);
    }

    @Override
    public void delete(int id) {
        clothingRepository.deleteClothing(id);
    }
}
