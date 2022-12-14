import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsListComponent} from "./products-list/products-list.component";
import {UsersListComponent} from "./users-list/users-list.component";
import {OrdersListComponent} from "./orders-list/orders-list.component";
import {ContactFormComponent} from "./contact-form/contact-form.component";

import {UserDetailsComponent} from "./user-details/user-details.component";

import {ProductDetailsComponent} from "./product-details/product-details.component";
import {OrderDetailsComponent} from "./order-details/order-details.component";
import {WelcomeComponent} from "./welcome/welcome.component";


const routes: Routes = [
  {path:'products-list',component:ProductsListComponent},
  {path:'',component:WelcomeComponent},
  {path:'users-list',component:UsersListComponent},
  {path:'orders-list',component:OrdersListComponent},
  {path:'contact-form',component:ContactFormComponent},
  {path:'user/:id',component:UserDetailsComponent},
  {path:'product/:id',component:ProductDetailsComponent},
  {path:'order/:id',component:OrderDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
