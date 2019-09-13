import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


export class Product {
  id: number;
  name: string;
  price: number;
  isDomestic: boolean;
  category: string;
  imageUrl: string;
  description?: string;



  constructor(id: number, name: string, price: number, isDomestic: boolean, category: string, imageUrl: string, description?: string) {

    this.id = id;
    this.name = name;
    this.price = price;
    this.isDomestic = isDomestic;
    this.category = category;
    this.imageUrl = imageUrl;
    this.description = description;
  }
}

export class quantityKey {
  cartItems: Product[];
  constructor(cartItems: Product[]) {
    this.cartItems = cartItems
  }

  
}



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsList: Product[] = [];
  cartItems: Product[] = [];
  productQuantity: number = 0;
  quantityKey


  apiUrl = 'http://localhost:8080';


  constructor(private http: HttpClient) { }


  addProduct(id: number, name: string, price: number, isDomestic: boolean, category: string, imageUrl: string, description?: string) {


    const newProduct = new Product(id, name, price, isDomestic, category, imageUrl, description);

    this.productsList.push(newProduct)
  }

  getProducts() {
    return this.productsList;
  }



  deleteProductByIdFromServer(id: number): Observable<Product> {
    const url = `${this.apiUrl}/productsList/${id}`;
    return this.http.delete<Product>(url);
  }


  getProductsFromServer(): Observable<Product[]> {
    const url = this.apiUrl + "/products";
    return this.http.get<Product[]>(url)
  }

  updateProductOnServer(id: number, name: string, price: number, isDomestic: boolean, category: string, imageUrl: string, description?: string) {
    const newProduct = new Product(id, name, price, isDomestic, category, imageUrl, description);
    const url = `${this.apiUrl}/productsList/${id}`;
    return this.http.put<Product>(url, newProduct);
  }

  createNewProductOnServer(id: number, name: string, price: number, isDomestic: boolean, category: string, imageUrl: string, description?: string) {
    const newProduct = new Product(id, name, price, isDomestic, category, imageUrl, description);
    const url = this.apiUrl + '/products';
    return this.http.post<Product>(url, newProduct)
  }

  deleteProductFromCart(i: number) {
    this.cartItems.splice(i, 1);
  }

  emptyCart() {
    this.cartItems = [];
  }

  getProductsInCart(): Product[] {
    return this.cartItems
  }

  addProductToCart(cartItem: Product) {
    this.cartItems.push(cartItem)
  }

  purchaseProducts(cartItems: Product[]): Observable<Product[]> {
    return of(this.cartItems);
  }

  getQuantity(): number {


    this.productsList.sort();

    var currentItem = null;
    var count = 0;

    for (var i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i] != currentItem) {
        // if (count > 0) {
        // }
        currentItem = this.cartItems[i];
        this.productQuantity = count;
        count = 1;

      } else {
        count++;
      }
    }
    // if (count > 0) {

    // }
    this.productQuantity = count;
    console.log(count)
    return this.productQuantity
  }



}
