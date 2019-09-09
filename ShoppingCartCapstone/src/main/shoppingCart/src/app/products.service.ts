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



  constructor(id: number, name: string, price: number, isDomestic: boolean, category: string, imageUrl: string){

    this.id = id;
    this.name = name;
    this.price = price;
    this.isDomestic = isDomestic;
    this.category = category;
    this.imageUrl = imageUrl;
  }
}



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsList: Product[] = [];
  cartItems: Product[] = [];

  apiUrl = 'http://localhost:8080';


  constructor(private http: HttpClient) { }


  addProduct(id: number, name: string, price: number, isDomestic: boolean, category: string, imageUrl: string) {


    const newProduct = new Product(id, name, price, isDomestic, category, imageUrl);

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

  updateProductOnServer(id: number, name: string, price: number, isDomestic: boolean, category: string, imageUrl: string) {
    const newProduct = new Product(id, name, price, isDomestic, category, imageUrl);
    const url = `${this.apiUrl}/productsList/${id}`;
    return this.http.put<Product>(url, newProduct);
  }

  createNewProductOnServer(id: number, name: string, price: number, isDomestic: boolean, category: string, imageUrl: string) {
    const newProduct = new Product(id, name, price, isDomestic, category, imageUrl);
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


}
