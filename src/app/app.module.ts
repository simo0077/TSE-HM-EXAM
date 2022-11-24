import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from "@angular/common/http";



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { UsersListComponent } from './users-list/users-list.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ProductComponent } from './product/product.component';

import { ListCardComponent } from './list-card/list-card.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsListComponent,
    UsersListComponent,
    OrdersListComponent,
    ContactFormComponent,

    ProductComponent,
    ListCardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
