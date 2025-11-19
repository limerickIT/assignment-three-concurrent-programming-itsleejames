package com.example.assignment_three_zelora.controller;

import com.example.assignment_three_zelora.model.entitys.Product;
import com.example.assignment_three_zelora.model.service.ProductSearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductSearchController {

    @Autowired
    private ProductSearchService searchService;

    @GetMapping("/search")
    public List<Product> search(
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String category,
            @RequestParam(required = false) Double minPrice,
            @RequestParam(required = false) Double maxPrice,
            @RequestParam(required = false) String keywords,
            @RequestParam(defaultValue = "false") boolean recentOnly
    ) {
        return searchService.search(name, category, minPrice, maxPrice, keywords, recentOnly);
    }
}
