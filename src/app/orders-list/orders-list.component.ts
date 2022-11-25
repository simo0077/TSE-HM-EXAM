import { Component, OnInit } from '@angular/core';
import {Order} from "../Entities/Orders";
import {User} from "../Entities/Users";
import {UserService} from "../user.service";
import {OrdersService} from "../orders.service";

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  OrdersList: Order[] = [];
  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
    this.showOrders()
  }

  showOrders(){
    this.ordersService.getOrders()
      .subscribe((data: Order[]) => this.OrdersList = data)

  }

}
