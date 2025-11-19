package com.example.assignment_three_zelora.model.entitys;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "categories")
public class Category implements Serializable {

    @Id
    @Column(name = "category_id")
    private Integer categoryId;

    @Column(name = "category_name")
    private String categoryName;

    @Column(name = "category_image")
    private String categoryImage;

    @JsonIgnore
    @OneToMany(mappedBy = "categoryId")
    private List<Product> productList;

    public Category() {}

    public Integer getCategoryId() { return categoryId; }
    public String getCategoryName() { return categoryName; }
    public String getCategoryImage() { return categoryImage; }

    public void setCategoryId(Integer categoryId) { this.categoryId = categoryId; }
    public void setCategoryName(String categoryName) { this.categoryName = categoryName; }
    public void setCategoryImage(String categoryImage) { this.categoryImage = categoryImage; }
}
