package com.example.be.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import javax.validation.constraints.Email;
import java.util.Set;

@Entity
public class Type {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    @OneToMany(mappedBy = "type")
    @JsonBackReference
    private Set<Clothing> clothingSet;

    public Type() {
    }

    public Type(int id, String name, Set<Clothing> clothingSet) {
        this.id = id;
        this.name = name;
        this.clothingSet = clothingSet;
    }

    public Type(String name, Set<Clothing> clothingSet) {
        this.name = name;
        this.clothingSet = clothingSet;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Clothing> getClothingSet() {
        return clothingSet;
    }

    public void setClothingSet(Set<Clothing> clothingSet) {
        this.clothingSet = clothingSet;
    }
}
