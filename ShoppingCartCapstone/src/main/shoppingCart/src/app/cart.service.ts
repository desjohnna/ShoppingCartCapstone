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
    return this.productsInCart;
  }

  deleteproductByIndex(i: number) {
    this.productsInCart.splice(i, 1);
  }

  emptyCart() {
    this.productsInCart = [];
  }

  
}
