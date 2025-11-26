package com.example.assignment_three_zelora.model.dto;

import java.math.BigDecimal;
import java.util.List;

public class ProductDetailDto {

    // basic product info
    private Integer productId;
    private String productName;
    private String description;
    private BigDecimal price;
    private BigDecimal discountedPrice;
    private BigDecimal displayPrice;
    private boolean discounted;
    private String featureImage;
    private String categoryName;
    private Integer sustainabilityRating;
    private String manufacturer;

    // rating info
    private Double averageRating;
    private Integer totalReviews;

    // reviews (rating >= 3)
    private List<ReviewDto> reviews;

    // stock info
    private Integer availableQuantity;
    private String stockMessage;

    public ProductDetailDto() {}

    // getters & setters

    public Integer getProductId() { return productId; }
    public void setProductId(Integer productId) { this.productId = productId; }

    public String getProductName() { return productName; }
    public void setProductName(String productName) { this.productName = productName; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public BigDecimal getPrice() { return price; }
    public void setPrice(BigDecimal price) { this.price = price; }

    public BigDecimal getDiscountedPrice() { return discountedPrice; }
    public void setDiscountedPrice(BigDecimal discountedPrice) { this.discountedPrice = discountedPrice; }

    public BigDecimal getDisplayPrice() { return displayPrice; }
    public void setDisplayPrice(BigDecimal displayPrice) { this.displayPrice = displayPrice; }

    public boolean isDiscounted() { return discounted; }
    public void setDiscounted(boolean discounted) { this.discounted = discounted; }

    public String getFeatureImage() { return featureImage; }
    public void setFeatureImage(String featureImage) { this.featureImage = featureImage; }

    public String getCategoryName() { return categoryName; }
    public void setCategoryName(String categoryName) { this.categoryName = categoryName; }

    public Integer getSustainabilityRating() { return sustainabilityRating; }
    public void setSustainabilityRating(Integer sustainabilityRating) { this.sustainabilityRating = sustainabilityRating; }

    public String getManufacturer() { return manufacturer; }
    public void setManufacturer(String manufacturer) { this.manufacturer = manufacturer; }

    public Double getAverageRating() { return averageRating; }
    public void setAverageRating(Double averageRating) { this.averageRating = averageRating; }

    public Integer getTotalReviews() { return totalReviews; }
    public void setTotalReviews(Integer totalReviews) { this.totalReviews = totalReviews; }

    public List<ReviewDto> getReviews() { return reviews; }
    public void setReviews(List<ReviewDto> reviews) { this.reviews = reviews; }

    public Integer getAvailableQuantity() { return availableQuantity; }
    public void setAvailableQuantity(Integer availableQuantity) { this.availableQuantity = availableQuantity; }

    public String getStockMessage() { return stockMessage; }
    public void setStockMessage(String stockMessage) { this.stockMessage = stockMessage; }
}
