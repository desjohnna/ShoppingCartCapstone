import { Injectable } from '@angular/core';
import { Product } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productsInCart: Product[] = [];

  constructor() { }

  addProductToCart(product: Product) {
    this.productsInCart.push(product);
  }

  getproductsInCart(): Product[] {
    // INCREASE QUANTITY COUNT FOR MULTIPLES OF SAME PRODUCT
//     var map = new Object();

// for(var i = 0; i < this.productsInCart.length; i++) {
//  if(map[this.productsInCart[i]] != null) {
//     map[this.productsInCart[i]] += 1;
// } else {
//     map[this.productsInCart[i]] = 1;
//     }
// }




    return this.productsInCart;

  }

  deleteproductByIndex(i: number) {
    this.productsInCart.splice(i, 1);
  }

  emptyCart() {
    this.productsInCart = [];
  }

  
}
