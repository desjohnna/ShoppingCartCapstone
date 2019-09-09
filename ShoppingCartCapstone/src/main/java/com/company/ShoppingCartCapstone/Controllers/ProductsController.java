package com.company.ShoppingCartCapstone.Controllers;

import com.company.ShoppingCartCapstone.DTO.Products;
import com.company.ShoppingCartCapstone.ServiceLayers.ProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ProductsController {


    @Autowired
    private ProductsService productsService;

    @RequestMapping(value = "/products", method = RequestMethod.GET)
    public List<Products> getAllProducts() {
        return productsService.getAllProducts();
    }

    @RequestMapping(value = "/products", method = RequestMethod.POST)
    public Products addNewProduct(@RequestBody Products product) {
        return productsService.addNewProduct(product);
    }

    @RequestMapping(value = "/products/{id}", method = RequestMethod.PUT)
    public void updateProduct(@RequestBody Products product, @PathVariable int id) {
        productsService.updateProduct(product, id);
    }

    @RequestMapping(value = "/products/{id}", method = RequestMethod.DELETE)
    public void deleteProduct(@PathVariable int id){
        productsService.deleteProduct(id);
    }


}
