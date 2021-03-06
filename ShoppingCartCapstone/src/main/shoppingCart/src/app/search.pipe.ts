import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './products.service';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Product[], filterText: string): Product[] {
    let productsMatching = value.filter((product: Product) => {
      if (product.name.toLowerCase().includes(filterText.toLowerCase()) || product.category == filterText || product.description == filterText) {
        return true;
      }
      return false;
    });

    return productsMatching;
  }

}
