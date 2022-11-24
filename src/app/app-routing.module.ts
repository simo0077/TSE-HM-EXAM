import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsListComponent} from "./products-list/products-list.component";
import {UsersListComponent} from "./users-list/users-list.component";
import {OrdersListComponent} from "./orders-list/orders-list.component";
import {ContactFormComponent} from "./contact-form/contact-form.component";
import {UserDetailsComponent} from "./user-details/user-details.component";

const routes: Routes = [
  {path:'products-list',component:ProductsListComponent},
  {path:'users-list',component:UsersListComponent},
  {path:'orders-list',component:OrdersListComponent},
  {path:'contact-form',component:ContactFormComponent},
  {path:'user/:id',component:UserDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
