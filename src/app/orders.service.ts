import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./Entities/Users";
import {Product} from "./Entities/Products";
import {Order} from "./Entities/Orders";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  ordersUrl = 'assets/orders.json';
  constructor(private http: HttpClient) {  }

  getOrders(){
    return this.http.get<Order[]>(this.ordersUrl)
  }

  getOrderById(id: number){
    return this.http.get<Order[]>(this.ordersUrl).pipe(map(orders => orders.filter(order => order.id == id)));
  }
}
