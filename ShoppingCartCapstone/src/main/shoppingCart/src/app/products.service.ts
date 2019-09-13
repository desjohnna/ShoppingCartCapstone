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
  quantity: number;
  description?: string;


  constructor(id: number, name: string, price: number, isDomestic: boolean, category: string, imageUrl: string, quantity: number, description?: string) {

    this.id = id;
    this.name = name;
    this.price = price;
    this.isDomestic = isDomestic;
    this.category = category;
    this.imageUrl = imageUrl;
    this.description = description;
    this.quantity = quantity;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsList: Product[] = [];
  cartItems: Product[] = [];
  productQuantity: number = 0;



  apiUrl = 'http://localhost:8080';


  constructor(private http: HttpClient) { }


  addProduct(id: number, name: string, price: number, isDomestic: boolean, category: string, imageUrl: string, quantity: number, description?: string) {


    const newProduct = new Product(id, name, price, isDomestic, category, imageUrl, quantity, description);

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

  updateProductOnServer(id: number, name: string, price: number, isDomestic: boolean, category: string, imageUrl: string, quantity: number, description?: string) {
    const newProduct = new Product(id, name, price, isDomestic, category, imageUrl, quantity, description);
    const url = `${this.apiUrl}/productsList/${id}`;
    return this.http.put<Product>(url, newProduct);
  }

  createNewProductOnServer(id: number, name: string, price: number, isDomestic: boolean, category: string, imageUrl: string, quantity, description?: string) {
    const newProduct = new Product(id, name, price, isDomestic, category, imageUrl, quantity, description);
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

  addProductToCart(cartItem: Product): number {

    if (this.cartItems.includes(cartItem)) {
      cartItem.quantity += 1
      console.log(cartItem.quantity);
      return cartItem.quantity;

    } else {
      this.cartItems.push(cartItem)

      cartItem.quantity = 1
      return cartItem.quantity;

    }

  }

  purchaseProducts(cartItems: Product[]): Observable<Product[]> {
    return of(this.cartItems);
  }

}
