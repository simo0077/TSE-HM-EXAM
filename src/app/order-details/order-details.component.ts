import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {User} from "../Entities/Users";
import {OrdersService} from "../orders.service";
import {Order} from "../Entities/Orders";

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  constructor(private ordersService: OrdersService,private route: ActivatedRoute ) { }
  id: number = 0;

  order: Order = {
    "id" : 0 ,
    "user" : {
      "id" : 0 ,
      "first_name" : "",
      "last_name" : "",
      "phone_number": "",
      "address": "",
      "email": "",

    },
    "products" : []

  };
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getOrder()
    console.log(this.id)
  }

  getOrder(){
    this.ordersService.getOrderById(this.id).subscribe(orders => this.order = orders[0]
    )
  }

}
