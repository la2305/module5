package com.example.be.repository;

import com.example.be.model.Clothing;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface IClothingRepository extends JpaRepository<Clothing,Integer> {
    @Query(value = "select * from clothing", nativeQuery = true)
    Page<Clothing> findAllClothing(Pageable pageable, String name);

    @Transactional
    @Modifying
    @Query(value = "delete from clothing where id=:id",nativeQuery = true)
    void deleteClothing(@Param("id") int id);
}
