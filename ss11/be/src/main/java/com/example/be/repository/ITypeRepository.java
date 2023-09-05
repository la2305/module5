package com.example.be.repository;

import com.example.be.model.Type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.w3c.dom.stylesheets.LinkStyle;

import java.util.List;

public interface ITypeRepository extends JpaRepository<Type,Integer> {
    @Query(value = "select * from type",nativeQuery = true)
    List<Type> findAllType();
}
