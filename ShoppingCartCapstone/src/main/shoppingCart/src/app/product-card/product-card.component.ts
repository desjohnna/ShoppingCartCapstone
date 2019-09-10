import { Component, OnInit, Input } from '@angular/core';
import { Product, ProductsService } from '../products.service';
import M = require('minimatch');

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product;
  @Input() i: number;

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    
   
  }

  onAddProductToCart(product: Product) {
    this.productService.addProductToCart(product);
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.tooltipped');
      var instances = M.Tooltip.init(elems, options);
      var instance = M.Tooltip.getInstance(elem);
}
  }
