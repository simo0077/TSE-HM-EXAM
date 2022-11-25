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
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

import { ListCardComponent } from './list-card/list-card.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import {FormsModule} from "@angular/forms";
import { WelcomeComponent } from './welcome/welcome.component';


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsListComponent,
    UsersListComponent,
    OrdersListComponent,
    ContactFormComponent,

    ListCardComponent,
    UserDetailsComponent,


    ProductCardComponent,
    ProductDetailsComponent,
    OrderDetailsComponent,
    WelcomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,


    HttpClientModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
