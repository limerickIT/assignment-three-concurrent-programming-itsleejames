package com.example.assignment_three_zelora.controller;

import com.example.assignment_three_zelora.model.dto.ProductDetailDto;
import com.example.assignment_three_zelora.model.service.ProductDetailService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductDetailController {

    private final ProductDetailService productDetailService;

    public ProductDetailController(ProductDetailService productDetailService) {
        this.productDetailService = productDetailService;
    }

    @GetMapping("/{id}/detail")
    public ProductDetailDto getDetail(@PathVariable Integer id) {
        return productDetailService.getProductDetail(id);
    }
}
