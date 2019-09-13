import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../products.service';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];
  countItems: [] = [];
  infoText = '';
  total = 0;
  quantity = 0;
  displayReciept = false;

  constructor(private productService: ProductsService, private cartService: CartService,
    private router: Router) { }

  ngOnInit() {
    this.getProductsInCart();
    // this.getQuantity(this.cartItems)
    // this.getQuantity()
  }

  getProductsInCart() {
    this.cartItems = this.productService.getProductsInCart();
    this.calculateTotal();
    this.productService.getQuantity();
    this.quantity = this.productService.getQuantity();
    // this.quantity = this.cartService.getQuantity()
    // this.cartItems.forEach(i => {
    //   if(i.name.toLowerCase(). )
    // })

  }



  // getQuantity() {
  setQuantity = function (quantity, relative) {


    var quantityInt = parseInt(quantity);
    if (quantityInt % 1 === 0) {
      if (relative === true) {
        this._quantity += quantityInt;
      } else {
        this._quantity = quantityInt;
      }
      if (this._quantity < 1) this._quantity = 1;

    } else {
      this._quantity = 1;
      // $log.info('Quantity must be an integer and was defaulted to 1');
    }
    this.quantity = this._quantity;

  };

  getQuantity = function () {
    console.log(this._quantity)
    console.log(this.quanity)
    return this._quantity;


  };




  // };

  calculateTotal() {
    this.total = 0;
    this.cartItems.forEach(i => {
      // CHECK THAT PRODUCT IS NOT TAX EXEMPT
      if (i.category != "books" && i.category != "food" && i.category != "medical supplies") {
        // IF PRODUCT IS NOT TAX EXEMPT APPLY SALES TAX
        let salesTax = i.price * .10;
        //ROUND SALES TAX TO NEAREST .05
        parseFloat((Math.round(salesTax / .05) * 0.05).toFixed(2))
        //ADD SALES TAX TO TOTAL
        this.total += i.price;
        this.total += salesTax;

        //CHECK IF PRODUCT IS IMPORTED
        if (i.isDomestic == false) {
          //IF PRODUCT IS IMPORTED ADD IMPORT DUTY
          let importDuty = i.price * .05;
          //ROUND IMPORT DUTY TO NEAREST .05
          parseFloat((Math.round(importDuty / .05) * 0.05).toFixed(2))
          //ADD IMPORT DUTY TO TOTAL
          return this.total += importDuty;
          //IF PRODUCT IS DOMESTIC JUST RETURN TOTAL
        } else if (i.isDomestic == true) {
          return this.total;
        }

        //IF PRODUCT IS TAX EXEMPT
      } else if (i.category == "books" || i.category == "food" || i.category == "medical supplies") {
        //SKIP ADDING SALES TAX AND ADD PRICE TO TOTAL
        this.total += i.price

        //CHECK IF PRODUCT IS IMPORTED
        if (i.isDomestic == false) {
          //IF PRODUCT IS IMPORTED ADD IMPORT DUTY
          let importDuty = i.price * .05;
          //ROUND IMPORT DUTY TO NEAREST .05
          parseFloat((Math.round(importDuty / .05) * 0.05).toFixed(2))
          //ADD IMPORT DUTY TO TOTAL
          return this.total += importDuty;
          //IF PRODUCT IS DOMESTIC JUST RETURN TOTAL
        } else if (i.isDomestic == true) {
          return this.total
        }
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

  onToggleRecieptDisplay() {
    this.displayReciept = !this.displayReciept;
  }
    

}
