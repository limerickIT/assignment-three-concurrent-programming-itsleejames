package com.example.assignment_three_zelora.model.service;

import com.example.assignment_three_zelora.model.entitys.Product;
import com.example.assignment_three_zelora.model.repos.ProductRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class ProductSearchService {

    @Autowired
    private ProductRepository productRepository;

    @PersistenceContext
    private EntityManager entityManager;

    // -----------------------------
    // GET PRODUCTS BY CATEGORY
    // -----------------------------
    public List<Product> getProductsByCategory(Integer categoryId) {
        return productRepository.findByCategoryId_CategoryId(categoryId);
    }

    // -----------------------------
    // SEARCH FUNCTION
    // -----------------------------
    public List<Product> search(
            String name,
            String category,
            Double minPrice,
            Double maxPrice,
            String keywords,
            boolean recentOnly
    ) {

        StringBuilder jpql = new StringBuilder(
                "SELECT p FROM Product p JOIN p.categoryId c WHERE 1=1"
        );

        List<Object> params = new ArrayList<>();
        int index = 1;

        if (name != null && !name.isBlank()) {
            jpql.append(" AND LOWER(p.productName) LIKE LOWER(?").append(index).append(")");
            params.add("%" + name + "%");
            index++;
        }

        if (category != null && !category.isBlank()) {
            jpql.append(" AND LOWER(c.categoryName) LIKE LOWER(?").append(index).append(")");
            params.add("%" + category + "%");
            index++;
        }

        if (minPrice != null) {
            jpql.append(" AND p.price >= ?").append(index);
            params.add(minPrice);
            index++;
        }

        if (maxPrice != null) {
            jpql.append(" AND p.price <= ?").append(index);
            params.add(maxPrice);
            index++;
        }

        if (keywords != null && !keywords.isBlank()) {
            jpql.append(" AND LOWER(p.description) LIKE LOWER(?").append(index).append(")");
            params.add("%" + keywords + "%");
            index++;
        }

        if (recentOnly) {
            jpql.append(" AND p.releaseDate >= ?").append(index);
            params.add(LocalDate.now().minusDays(7));
            index++;
        }

        TypedQuery<Product> query = entityManager.createQuery(jpql.toString(), Product.class);

        for (int i = 0; i < params.size(); i++) {
            query.setParameter(i + 1, params.get(i));
        }

        return query.getResultList();
    }
}
