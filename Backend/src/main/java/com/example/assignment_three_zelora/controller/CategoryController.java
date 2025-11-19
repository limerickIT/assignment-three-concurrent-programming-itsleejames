package com.example.assignment_three_zelora.controller;

import com.example.assignment_three_zelora.model.entitys.Category;
import com.example.assignment_three_zelora.model.service.CategoryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
@CrossOrigin(origins = "http://localhost:5173")
public class CategoryController {

    private final CategoryService service;

    public CategoryController(CategoryService service) {
        this.service = service;
    }

    @GetMapping
    public List<Category> getAll() {
        return service.getAllCategories();
    }

    @GetMapping("/{id}")
    public Category getOne(@PathVariable Integer id) {
        return service.getCategory(id);
    }
}
