package com.company.ShoppingCartCapstone;

import com.company.ShoppingCartCapstone.DAO.ProductsRepository;
import com.company.ShoppingCartCapstone.DTO.Products;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class DAOTest {

    @Autowired
    ProductsRepository productsDao;


    Products product1;
    Products product2;

    BigDecimal bigDecimal = new BigDecimal(10.00);

    @Before
    public void setUp() throws Exception {

        productsDao.deleteAll();

        product1 = new Products();
        product1.setId(1);
        product1.setName("CD of Songs");
        product1.setPrice(new BigDecimal(20.00));
        product1.setCategory("music");
        product1.setDescription("musical music");
        product1.setImageUrl("music@music.com");
        product1.setDomestic(false);

        product2 = new Products();
        product2.setId(2);
        product2.setName("Book of Books");
        product2.setCategory("books");
        product2.setPrice(bigDecimal);
        product2.setDomestic(true);
        product2.setDescription("Book about books.");
        product2.setImageUrl("https://bookofbooks.com");
    }


    @Test
    @Transactional
    public void AddNewProduct() {
        productsDao.save(product1);
        productsDao.save(product2);


        assertNotNull(product1.getId());
        assertNotNull(product2.getId());
    }


    @Test
    @Transactional
    public void DeleteProductTest() {

        productsDao.save(product1);
//        productsDao.save(product2);

        productsDao.delete(product1);

        List<Products> fromRepo = productsDao.findAll();

        assertThat(fromRepo, hasSize(1));

    }

}

