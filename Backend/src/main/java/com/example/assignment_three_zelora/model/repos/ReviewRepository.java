package com.example.assignment_three_zelora.model.repos;

import com.example.assignment_three_zelora.model.entitys.Product;
import com.example.assignment_three_zelora.model.entitys.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Integer> {

    // all reviews for product with rating >= 3 and NOT flagged as spam
    List<Review> findByProductIdAndRatingGreaterThanEqualAndFlaggedAsSpamFalse(
            Product product,
            Integer rating
    );
}
