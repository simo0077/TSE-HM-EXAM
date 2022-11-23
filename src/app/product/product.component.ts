import { Component, OnInit } from '@angular/core';
import {ProductsServiceService} from "../products-service.service";
import {Product} from "../Entities/Products";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductsServiceService ) { }

  ngOnInit(): void {
  }



}
