package com.company.ShoppingCartCapstone.DAO;

import com.company.ShoppingCartCapstone.DTO.Products;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductsRepository extends JpaRepository<Products, Integer> {
}
