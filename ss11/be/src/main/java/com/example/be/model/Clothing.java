package com.example.be.model;

import javax.persistence.*;
import java.sql.Date;

@Entity
public class Clothing {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String code;
    private String name;
    private Date date;
    private int quantity;
    @ManyToOne
    @JoinColumn(name = "type_id",referencedColumnName = "id")
    private Type type;

    public Clothing() {
    }

    public Clothing(int id, String code, String name, Date date, int quantity, Type type) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.date = date;
        this.quantity = quantity;
        this.type = type;
    }

    public Clothing(String code, String name, Date date, int quantity, Type type) {
        this.code = code;
        this.name = name;
        this.date = date;
        this.quantity = quantity;
        this.type = type;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Type getType() {
        return type;
    }

    public void setType(Type type) {
        this.type = type;
    }
}
