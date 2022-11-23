import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "./Entities/Products";

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  configUrl = 'assets/products.json'

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<Product[]>(this.configUrl);
  }
}
