package com.example.assignment_three_zelora.model.service;

import com.example.assignment_three_zelora.model.dto.ProductDetailDto;
import com.example.assignment_three_zelora.model.dto.ReviewDto;
import com.example.assignment_three_zelora.model.entitys.Inventory;
import com.example.assignment_three_zelora.model.entitys.Product;
import com.example.assignment_three_zelora.model.entitys.Review;
import com.example.assignment_three_zelora.model.repos.InventoryRepository;
import com.example.assignment_three_zelora.model.repos.ProductRepository;
import com.example.assignment_three_zelora.model.repos.ReviewRepository;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Service
public class ProductDetailService {

    private final ProductRepository productRepository;
    private final ReviewRepository reviewRepository;
    private final InventoryRepository inventoryRepository;

    public ProductDetailService(ProductRepository productRepository,
                                ReviewRepository reviewRepository,
                                InventoryRepository inventoryRepository) {
        this.productRepository = productRepository;
        this.reviewRepository = reviewRepository;
        this.inventoryRepository = inventoryRepository;
    }

    public ProductDetailDto getProductDetail(Integer id) {

        Product p = productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found: " + id));

        ProductDetailDto dto = new ProductDetailDto();
        dto.setProductId(p.getProductId());
        dto.setProductName(p.getProductName());
        dto.setDescription(p.getDescription());
        dto.setPrice(p.getPrice());
        dto.setDiscountedPrice(p.getDiscountedPrice());
        dto.setFeatureImage(p.getFeatureImage());
        dto.setSustainabilityRating(p.getSustainabilityRating());
        dto.setManufacturer(p.getManufacturer());

        if (p.getCategoryId() != null) {
            dto.setCategoryName(p.getCategoryId().getCategoryName());
        }

        // price logic: show discounted if lower
        BigDecimal price = p.getPrice();
        BigDecimal disc = p.getDiscountedPrice();

        if (disc != null && price != null && disc.compareTo(price) < 0) {
            dto.setDisplayPrice(disc);
            dto.setDiscounted(true);
        } else {
            dto.setDisplayPrice(price);
            dto.setDiscounted(false);
        }

        // reviews with rating >= 3 & not spam
        List<Review> reviews = reviewRepository
                .findByProductIdAndRatingGreaterThanEqualAndFlaggedAsSpamFalse(p, 3);

        List<ReviewDto> reviewDtos = new ArrayList<>();
        double sum = 0.0;

        for (Review r : reviews) {
            ReviewDto rd = new ReviewDto();
            rd.setRating(r.getRating());
            rd.setReviewText(r.getReviewText());
            rd.setReviewDate(r.getReviewDate());

            if (r.getCustomerId() != null) {
                rd.setCustomerFirstName(r.getCustomerId().getFirstName());
                rd.setCustomerCity(r.getCustomerId().getCity());
            }

            reviewDtos.add(rd);
            if (r.getRating() != null) {
                sum += r.getRating();
            }
        }

        dto.setReviews(reviewDtos);
        dto.setTotalReviews(reviewDtos.size());

        if (!reviewDtos.isEmpty()) {
            dto.setAverageRating(sum / reviewDtos.size());
        } else {
            dto.setAverageRating(0.0);
        }

        // stock info from inventory
        List<Inventory> inventoryList = inventoryRepository.findByProductId(p);

        int totalInStock = 0;
        int totalReserved = 0;
        int reorderPoint = 0;

        for (Inventory inv : inventoryList) {
            if (inv.getQuantityInStock() != null) {
                totalInStock += inv.getQuantityInStock();
            }
            if (inv.getQuantityReserved() != null) {
                totalReserved += inv.getQuantityReserved();
            }
            if (inv.getReorderPoint() != null && inv.getReorderPoint() > reorderPoint) {
                reorderPoint = inv.getReorderPoint();
            }
        }

        int available = totalInStock - totalReserved;
        dto.setAvailableQuantity(available);

        String stockMessage;
        if (available <= 0) {
            stockMessage = "Out of stock";
        } else if (available <= reorderPoint && reorderPoint > 0) {
            stockMessage = "Low stock — only " + available + " left!";
        } else {
            stockMessage = "In stock (" + available + " available)";
        }
        dto.setStockMessage(stockMessage);

        return dto;
    }
}
