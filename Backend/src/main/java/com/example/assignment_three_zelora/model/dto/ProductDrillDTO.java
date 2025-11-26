package com.example.assignment_three_zelora.model.dto;

import java.math.BigDecimal;
import java.util.List;

public class ProductDrillDTO {

    public Integer productId;
    public String productName;
    public String description;
    public BigDecimal price;
    public String featureImage;

    public String stockStatus;
    public Integer availableQuantity;

    public List<ReviewDTO> reviews;

    public static class ReviewDTO {
        public Integer rating;
        public String comment;
        public String customerFirstName;
        public String customerCity;
    }
}
