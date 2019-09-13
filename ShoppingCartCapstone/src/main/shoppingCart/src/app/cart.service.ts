import { Injectable } from '@angular/core';
import { Product } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productsInCart: Product[] = [];
  productQuantity: number = 0;
  constructor() { }


  // getproductsInCart(): Product[] {
  //   // INCREASE QUANTITY COUNT FOR MULTIPLES OF SAME PRODUCT
  //   //     var map = new Object();

  //   // for(var i = 0; i < this.productsInCart.length; i++) {
  //   //  if(map[this.productsInCart[i]] != null) {
  //   //     map[this.productsInCart[i]] += 1;
  //   // } else {
  //   //     map[this.productsInCart[i]] = 1;
  //   //     }
  //   // }

  //   return this.productsInCart;

  // }

  deleteproductByIndex(i: number) {
    this.productsInCart.splice(i, 1);
  }

  emptyCart() {
    this.productsInCart = [];
  }

  // getQuantity(): number {


  //  this.productsInCart.sort();

  //  var current = null;
  //  var cnt = 0;
  //  for (var i = 0; i < this.productsInCart.length; i++) {
  //      if (this.productsInCart[i] != current) {
  //          if (cnt > 0) {
  //              document.write(current + ' comes --> ' + cnt + ' times<br>');
  //          }
  //          current = this.productsInCart[i];
  //          cnt = 1;
  //      } else {
  //          cnt++;
  //      }
  //  }
  //  if (cnt > 0) {
  //   document.write(current + ' comes --> ' + cnt + ' times');
  //  }
  //  this.productQuantity = cnt;
  //  console.log(cnt)
  //  return cnt
  // }



}
