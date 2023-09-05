package com.example.be.controller;

import com.example.be.model.Clothing;
import com.example.be.service.IClothingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class ClothingController {
    @Autowired
    private IClothingService clothingService;
    @GetMapping("/clothing")
    public ResponseEntity<Page<Clothing>> getListClothing(@RequestParam(defaultValue = "0") Integer page,
                                                          @RequestParam(defaultValue = "0") String search){
        Pageable pageable = PageRequest.of(page,2);
        Page<Clothing> clothingPage =clothingService.findAll(pageable,search);
        if (clothingPage.getTotalElements()==0){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(clothingPage,HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable int id){
        clothingService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
