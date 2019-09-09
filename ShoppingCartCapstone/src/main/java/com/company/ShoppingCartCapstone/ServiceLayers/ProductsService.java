package com.company.ShoppingCartCapstone.ServiceLayers;

import com.company.ShoppingCartCapstone.DAO.ProductsRepository;
import com.company.ShoppingCartCapstone.DTO.Products;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ProductsService {

    @Autowired
    private ProductsRepository productsRepo;

    public List<Products> getAllProducts() {
        return productsRepo.findAll();
    }

    public Products addNewProduct(Products product) {
        return productsRepo.save(product);
    }

    public void updateProduct(Products product, int id) {
        if (product.getId() == id) {
            productsRepo.save(product);
        }

    }

    public void deleteProduct(int id) {
        productsRepo.deleteById(id);
    }


}
