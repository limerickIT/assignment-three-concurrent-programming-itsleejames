package com.example.assignment_three_zelora.model.entitys;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "products")
public class Product implements Serializable {

    @Id
    @Column(name = "product_id")
    private Integer productId;

    @Column(name = "product_name")
    private String productName;

    @Lob
    @Column(name = "description")
    private String description;

    @Column(name = "price")
    private BigDecimal price;

    @Column(name = "size")
    private String size;

    @Column(name = "colour")
    private String colour;

    @Column(name = "material")
    private String material;

    @Column(name = "sustainability_rating")
    private Integer sustainabilityRating;

    @Column(name = "manufacturer")
    private String manufacturer;

    @Temporal(TemporalType.DATE)
    @Column(name = "release_date")
    private Date releaseDate;

    @Column(name = "discounted_price")
    private BigDecimal discountedPrice;

    @Column(name = "feature_image")
    private String featureImage;

    // MUST IGNORE THESE OTHERWISE JSON LOOP 💥
    @JsonIgnore
    @OneToMany(mappedBy = "productId")
    private List<Orderitem> orderitemList;

    @JsonIgnore
    @OneToMany(mappedBy = "productId")
    private List<Review> reviewList;

    @JsonIgnore
    @OneToMany(mappedBy = "productId")
    private List<Wishlist> wishlistList;

    @JsonIgnore
    @OneToMany(mappedBy = "productId")
    private List<Inventory> inventoryList;

    @ManyToOne
    @JoinColumn(name = "supplier_id")
    private Supplier supplierId;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category categoryId;

    public Product() {}

    public Integer getProductId() { return productId; }
    public String getProductName() { return productName; }
    public String getDescription() { return description; }
    public BigDecimal getPrice() { return price; }
    public String getSize() { return size; }
    public String getColour() { return colour; }
    public String getMaterial() { return material; }
    public Integer getSustainabilityRating() { return sustainabilityRating; }
    public String getManufacturer() { return manufacturer; }
    public Date getReleaseDate() { return releaseDate; }
    public BigDecimal getDiscountedPrice() { return discountedPrice; }
    public String getFeatureImage() { return featureImage; }
    public Supplier getSupplierId() { return supplierId; }
    public Category getCategoryId() { return categoryId; }

    public void setProductId(Integer productId) { this.productId = productId; }
    public void setProductName(String productName) { this.productName = productName; }
    public void setDescription(String description) { this.description = description; }
    public void setPrice(BigDecimal price) { this.price = price; }
    public void setSize(String size) { this.size = size; }
    public void setColour(String colour) { this.colour = colour; }
    public void setMaterial(String material) { this.material = material; }
    public void setSustainabilityRating(Integer sustainabilityRating) { this.sustainabilityRating = sustainabilityRating; }
    public void setManufacturer(String manufacturer) { this.manufacturer = manufacturer; }
    public void setReleaseDate(Date releaseDate) { this.releaseDate = releaseDate; }
    public void setDiscountedPrice(BigDecimal discountedPrice) { this.discountedPrice = discountedPrice; }
    public void setFeatureImage(String featureImage) { this.featureImage = featureImage; }
    public void setSupplierId(Supplier supplierId) { this.supplierId = supplierId; }
    public void setCategoryId(Category categoryId) { this.categoryId = categoryId; }
}
