import {Component, OnInit} from '@angular/core';
import {ProductsServiceService} from "../products-service.service";
import {Product} from "../Entities/Products";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  constructor(private productService: ProductsServiceService) {
  }

  products: Product[] = [];

  ngOnInit(): void {
    this.showProducts()
  }

  showProducts() {
    this.productService.getProducts()
      .subscribe(products => this.products = products
      )
  }

  log() {
    console.log(this.products);
  }

}
