import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];
  infoText = '';
  total = 0;

  constructor(private productService: ProductsService,
    private router: Router) { }

  ngOnInit() {
    this.getProductsInCart();
  }

  getProductsInCart() {
    this.cartItems = this.productService.getProductsInCart();
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = 0;
    this.cartItems.forEach(i => {
      if (i.price) {
        this.total += i.price;
      }
    })
  }


  onPurchase() {
    this.productService.purchaseProducts(this.cartItems).subscribe(
      (res: any) => {
        this.productService.emptyCart();
        this.cartItems = [];

        this.infoText = "Thank you for your purchase!"

        setTimeout(() => {
          this.router.navigate(['/product'])
        }, 3000);
      },
      err => {
        console.log(err)
      }
    );
  }

  onRemoveProductFromCart(i: number) {
    this.productService.deleteProductFromCart(i)
    this.getProductsInCart();
  }

}
