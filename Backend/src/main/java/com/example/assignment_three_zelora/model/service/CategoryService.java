package com.example.assignment_three_zelora.model.service;

import com.example.assignment_three_zelora.model.entitys.Category;
import com.example.assignment_three_zelora.model.repos.CategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    private final CategoryRepository repo;

    public CategoryService(CategoryRepository repo) {
        this.repo = repo;
    }

    public List<Category> getAllCategories() {
        return repo.findAll();
    }

    public Category getCategory(Integer id) {
        return repo.findById(id).orElse(null);
    }
}
