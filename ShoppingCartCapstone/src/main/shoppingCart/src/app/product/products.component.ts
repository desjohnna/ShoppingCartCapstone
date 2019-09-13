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
  filterCategory: string = '';
  @Input() product: Product;
  @Input() i: number;

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.getProducts();

  }

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


 


}

 


