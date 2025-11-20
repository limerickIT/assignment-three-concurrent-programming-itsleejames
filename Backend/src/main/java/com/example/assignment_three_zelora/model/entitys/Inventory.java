package com.example.assignment_three_zelora.model.entitys;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.io.Serializable;


@Entity
@Table(name = "inventory")
public class Inventory implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(name = "inventory_id")
    @JsonIgnore

    private Integer inventoryId;
   
    @Column(name = "quantity_in_stock")
    private Integer quantityInStock;
   
    @Column(name = "quantity_reserved")
    private Integer quantityReserved;
   
    @Column(name = "reorder_point")
    private Integer reorderPoint;
   
    @JoinColumn(name = "product_id", referencedColumnName = "product_id")
    @ManyToOne
    @JsonIgnore

    private Product productId;
    
    @JoinColumn(name = "supplier_id", referencedColumnName = "supplier_id")
    @ManyToOne
    @JsonIgnore

    private Supplier supplierId;


    public Inventory(Integer inventoryId, Integer quantityInStock, Integer quantityReserved, Integer reorderPoint, Product productId, Supplier supplierId) {
        this.inventoryId = inventoryId;
        this.quantityInStock = quantityInStock;
        this.quantityReserved = quantityReserved;
        this.reorderPoint = reorderPoint;
        this.productId = productId;
        this.supplierId = supplierId;
    }

    public Inventory() {
    }

    public Integer getInventoryId() {
        return this.inventoryId;
    }

    public Integer getQuantityInStock() {
        return this.quantityInStock;
    }

    public Integer getQuantityReserved() {
        return this.quantityReserved;
    }

    public Integer getReorderPoint() {
        return this.reorderPoint;
    }

    public Product getProductId() {
        return this.productId;
    }

    public Supplier getSupplierId() {
        return this.supplierId;
    }

    public void setInventoryId(Integer inventoryId) {
        this.inventoryId = inventoryId;
    }

    public void setQuantityInStock(Integer quantityInStock) {
        this.quantityInStock = quantityInStock;
    }

    public void setQuantityReserved(Integer quantityReserved) {
        this.quantityReserved = quantityReserved;
    }

    public void setReorderPoint(Integer reorderPoint) {
        this.reorderPoint = reorderPoint;
    }

    public void setProductId(Product productId) {
        this.productId = productId;
    }

    public void setSupplierId(Supplier supplierId) {
        this.supplierId = supplierId;
    }

    public String toString() {
        return "Inventory(inventoryId=" + this.getInventoryId() + ", quantityInStock=" + this.getQuantityInStock() + ", quantityReserved=" + this.getQuantityReserved() + ", reorderPoint=" + this.getReorderPoint() + ")";
    }
}