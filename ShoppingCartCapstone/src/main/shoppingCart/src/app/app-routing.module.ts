import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './product/products.component';


const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path: 'cart', component: CartComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
