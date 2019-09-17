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
  displayCartItems = true;
  importDutyTotal = 0;
  salesTax = 0;
  dutyTotal = 0;



  constructor(private productService: ProductsService, private cartService: CartService,
    private router: Router) { }

  ngOnInit() {
    this.getProductsInCart();


  }

  getProductsInCart() {
    this.cartItems = this.productService.getProductsInCart();

    this.calculateImportDutyTotal();
    this.calculateTax();
    this.calculateTotal();

  }


  calculateTotal() {
    this.total = 0;
    this.cartItems.forEach(i => {
      // CHECK THAT PRODUCT IS NOT TAX EXEMPT
      if (i.category != "books" && i.category != "food" && i.category != "medical supplies") {

        // IF PRODUCT IS NOT TAX EXEMPT APPLY SALES TAX
        let salesTax = i.price * .10;
        //ROUND SALES TAX TO NEAREST .05
        salesTax = parseFloat((Math.round(salesTax / .05) * 0.05).toFixed(2))
        //ADD SALES TAX TO TOTAL
        this.total += (i.price * i.quantity);
        this.total += salesTax;

        //CHECK IF PRODUCT IS IMPORTED
        if (i.isDomestic == false) {
          //IF PRODUCT IS IMPORTED ADD IMPORT DUTY
          let importDuty = i.price * .05;
          //ROUND IMPORT DUTY TO NEAREST .05
          importDuty = parseFloat((Math.round(importDuty / .05) * 0.05).toFixed(2))

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
          // console.log(this.importDutyTotal)
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
      let dutyTax = (i.price * i.quantity) * .05;
        //ROUND IMPORT DUTY TO NEAREST .05
        totalImportDuty = parseFloat((Math.round(totalImportDuty / .05) * 0.05).toFixed(2))
        //ASSIGN TO CLASS VARIABLE
        totalImportDuty += dutyTax;
        // ELSE IF PRODUCT IS DOMESTIC JUST RETURN IMPORT DUTY WHICH IS SET AT 0 ALREADY
      }
    })
    this.dutyTotal = totalImportDuty;
  }


  calculateTax() {

    let totalTax = 0;
    this.cartItems.forEach(i => {

      // IF PRODUCT IS TAX EXEMPT
      if (i.category == "books" || i.category == "food" || i.category == "medical supplies") {
        // SKIP ADDING SALES TAX AND ADD PRICE TO TOTAL

      } else {

        // IF PRODUCT IS NOT TAX EXEMPT APPLY SALES TAX
        let tax = (i.price * i.quantity) * .10;

        tax = parseFloat((Math.round(tax / .05) * 0.05).toFixed(2));
        totalTax += tax;
      }
    })
    this.salesTax = totalTax;
  }


  onPurchase() {
    this.productService.purchaseProducts(this.cartItems).subscribe(
      (res: any) => {
        // this.productService.emptyCart();
        // this.cartItems = [];

        this.infoText = "Thank you for your pre-order!"

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
    this.displayCartItems = !this.displayCartItems;

    // setTimeout(onToggleReciptDisplay(){ this.cartItems = []; }, 3000);
  }
}
