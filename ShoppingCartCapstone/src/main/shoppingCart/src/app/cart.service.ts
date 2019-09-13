import { Injectable } from '@angular/core';
import { Product } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productsInCart: Product[] = [];
  productQuantity: number = 0;
  constructor() { }


  deleteproductByIndex(i: number) {
    this.productsInCart.splice(i, 1);
  }

  emptyCart() {
    this.productsInCart = [];
  }

}
