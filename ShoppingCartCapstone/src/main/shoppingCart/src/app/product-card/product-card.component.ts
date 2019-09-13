import { Component, OnInit, Input } from '@angular/core';
import { Product, ProductsService } from '../products.service';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  // @Input() quantity: number;
  @Input() product: Product;
  @Input() i: number;

  constructor(private productService: ProductsService, private cartService: CartService) { }

  ngOnInit() {


  }

  onAddProductToCart(product: Product) {
    this.productService.addProductToCart(product);
    //  this.cartService.getQuantity();
 
  }
}

