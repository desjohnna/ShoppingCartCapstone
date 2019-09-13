package com.company.ShoppingCartCapstone;

import com.company.ShoppingCartCapstone.DAO.ProductsRepository;
import com.company.ShoppingCartCapstone.DTO.Products;
import com.company.ShoppingCartCapstone.ServiceLayers.ProductsService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class ProductsServiceTest {
    @Mock
    ProductsRepository productRepoMock;

    @InjectMocks
    ProductsService productsService = new ProductsService(productRepoMock);

/* LEARNED HOW TO USE A BIG DECIMAL DATA TYPE IN CONSTRUCTOR */
    BigDecimal b1 = new BigDecimal(10.00);
    BigDecimal b2 = new BigDecimal(10.00);
    BigDecimal b3 = new BigDecimal(10.00);


    Products product1;
    Products product2;
    Products product3;

    List<Products> productsList;


    @Before
    public void setUp() {
        product1 = new Products(1, "Title1", b1, true, "books", "test-tes.com", "book about...");
        product2 = new Products(2, "Title2", b2, true, "books", "test-tes.com", "book about...");
        product3 = new Products(3, "Title3", b3, true, "books", "test-tes.com", "book about...");

        productsList = Arrays.asList(product1, product2, product3);
    }

    @Test
    public void testMoviesFromMovieList() {
        List<Products> expectedList = Arrays.asList(product1, product2);
//        when(productRepoMock.getOne(1)).thenReturn(productsService.getAllProducts());
        assertEquals(expectedList, productsService.getAllProducts());
    }



}
