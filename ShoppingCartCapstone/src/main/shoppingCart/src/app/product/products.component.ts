import { Component, OnInit, Input } from '@angular/core';
import { Product, ProductsService } from '../products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  
  productList: Product[] = [];
  productSub: Subscription;
  filterText: string = '';
  @Input() product: Product;
  @Input() i: number;

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }

  //subscribe
  getProducts() {
    this.productSub = this.productService.getProductsFromServer().subscribe(
      (res: Product[]) => {
        console.log('res ' + res)
        this.productList = res;
      },
      err => {
        console.log(err);
      }
    )
  }


 


    //CHANGEING THE BUTTON TEXT AND COLOR AND SETTING TIME OUT FOR IT TO GO BACK
    // document.getElementById('addToCartBtn').innerText = 'Added!'
    // document.getElementById('addToCartBtn').style.backgroundColor = 'red'
    // setTimeout(() => {
    //   document.getElementById('addToCartBtn').innerText = 'Add to Cart'
    //   document.getElementById('addToCartBtn').style.backgroundColor = ''
      

    // }, 2000);
  }

 


