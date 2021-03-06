package com.company.ShoppingCartCapstone;

import com.company.ShoppingCartCapstone.Controllers.ProductsController;
import com.company.ShoppingCartCapstone.DAO.ProductsRepository;
import com.company.ShoppingCartCapstone.DTO.Products;
import com.company.ShoppingCartCapstone.ServiceLayers.ProductsService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(MockitoJUnitRunner.class)
public class ProductControllerTest {

    @Mock
    @Autowired
    ProductsRepository productsRepoMock;

    @InjectMocks
    ProductsService productsService;

    private MockMvc mockMvc;

    @InjectMocks
    ProductsController productsController;

    Products product1;
    Products product2;


    List<Products> productsList;

    @Before
    public void setUp() throws Exception {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(productsController).build();

        product1 = new Products();
        product1.setId(1);
        product1.setName("Book of Books");
        product1.setPrice(new BigDecimal("10.00"));
        product1.setCategory("books");
        product1.setImageUrl("books@books.com");
        product1.setDescription("Book about books");
        product1.setDomestic(true);


        product2 = new Products();
        product2.setId(2);
        product2.setName("CD of Music");
        product2.setPrice(new BigDecimal("20.00"));
        product2.setCategory("music");
        product2.setImageUrl("music@music.com");
        product2.setDescription("Cd of music");
        product2.setDomestic(false);

        productsList = Arrays.asList(product1, product2);
    }

    @Test
    public void rootContext_ShouldRespondWith404() throws Exception {

        mockMvc.perform(get("/")).andExpect(status().isNotFound());

    }

    @Test
    public void testGetAllProducts() throws Exception {

        List<Products> expectedList = Arrays.asList(product1, product2);

        when(productsRepoMock.findAll()).thenReturn(productsList);
        assertEquals(expectedList, productsService.getAllProducts());
        verify(productsRepoMock).findAll();
    }
}
