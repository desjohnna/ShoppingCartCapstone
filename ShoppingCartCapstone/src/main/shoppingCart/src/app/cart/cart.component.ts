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
  importDutyTotal = 0;
  salesTax = 0;



  constructor(private productService: ProductsService, private cartService: CartService,
    private router: Router) { }

  ngOnInit() {
    this.getProductsInCart();

  }

  getProductsInCart() {
    this.cartItems = this.productService.getProductsInCart();
    this.calculateTotal();
    this.calculateImportDutyTotal();
    this.calculateTax();

  }


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
        this.total += (i.price * i.quantity);
        this.total += salesTax;

        //CHECK IF PRODUCT IS IMPORTED
        if (i.isDomestic == false) {
          //IF PRODUCT IS IMPORTED ADD IMPORT DUTY
          let importDuty = i.price * .05;
          //ROUND IMPORT DUTY TO NEAREST .05
          parseFloat((Math.round(importDuty / .05) * 0.05).toFixed(2))

          this.importDutyTotal = importDuty;
          //ADD IMPORT DUTY TO TOTAL
          return this.total += importDuty;
          //IF PRODUCT IS DOMESTIC JUST RETURN TOTAL
        } else if (i.isDomestic == true) {
          return this.total;
        }

        //IF PRODUCT IS TAX EXEMPT
      } else if (i.category == "books" || i.category == "food" || i.category == "medical supplies") {
        //SKIP ADDING SALES TAX AND ADD PRICE TO TOTAL
        this.total += (i.price * i.quantity);
        //CHECK IF PRODUCT IS IMPORTED
        if (i.isDomestic == false) {
          //IF PRODUCT IS IMPORTED ADD IMPORT DUTY
          let importDuty = i.price * .05;
          //ROUND IMPORT DUTY TO NEAREST .05
          parseFloat((Math.round(importDuty / .05) * 0.05).toFixed(2))

          this.importDutyTotal = importDuty;
          console.log(this.importDutyTotal)
          //ADD IMPORT DUTY TO TOTAL
          return this.total += importDuty;
          //IF PRODUCT IS DOMESTIC JUST RETURN TOTAL
        } else if (i.isDomestic == true) {
          console.log(this.total)
          return this.total
        }
      }
    })
  }

  calculateImportDutyTotal() {

    let totalImportDuty = 0;

    this.cartItems.forEach(i => {
      //CHECK IF PRODUCT IS IMPORTED
      if (i.isDomestic == false) {
        //IF PRODUCT IS IMPORTED ADD IMPORT DUTY
        this.importDutyTotal = i.price * .05;
        //ROUND IMPORT DUTY TO NEAREST .05
        parseFloat((Math.round(this.importDutyTotal / .05) * 0.05).toFixed(2))

        this.importDutyTotal = totalImportDuty;

        return this.importDutyTotal;
        //IF PRODUCT IS DOMESTIC JUST RETURN IMPORT DUTY WHICH IS SET AT 0 ALREADY
      } else if (i.isDomestic == true) {
        return this.importDutyTotal;
      }
    })
  }


  calculateTax() {

    let totalTax = 0;
    this.cartItems.forEach(i => {

      // IF PRODUCT IS TAX EXEMPT
      if (i.category == "books" || i.category == "food" || i.category == "medical supplies") {
        // SKIP ADDING SALES TAX AND ADD PRICE TO TOTAL
        return this.salesTax = 0;
      } else {
        // IF PRODUCT IS NOT TAX EXEMPT APPLY SALES TAX
        this.salesTax = i.price * .10;
        // ROUND SALES TAX TO NEAREST .05
        parseFloat((Math.round(this.salesTax / .05) * 0.05).toFixed(2))
        // MULTIPLY TAX BY QUANTITY TO GET TOTAL
        totalTax += (this.salesTax * i.quantity);
        console.log(totalTax);
        this.salesTax += totalTax;

        // console.log(this.salesTax);
        return this.salesTax;
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
