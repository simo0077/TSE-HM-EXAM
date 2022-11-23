import { Component, OnInit } from '@angular/core';
import {ProductsServiceService} from "../products-service.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../Entities/Products";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private productService: ProductsServiceService,private route: ActivatedRoute ) { }
  id: number = 0;

  product: Product = {
    "id" : 0 ,
    "label" : "",
    "description" : "",
    "price"  : "",
    "image" :""

  };
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getProduct()
    console.log(this.id)
  }

  getProduct(){
    this.productService.getProduct(this.id).subscribe(products => this.product = products[0]
    )
  }

}
