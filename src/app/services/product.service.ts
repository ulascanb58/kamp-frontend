import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductResponseModel } from '../models/productResponseModel';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [];

  apiUrl = 'https://localhost:44316/api/products/getall';
  getProducts(): Observable<ProductResponseModel> {
   return this.httpClient
      .get<ProductResponseModel>(this.apiUrl);
  }

  constructor(private httpClient: HttpClient) {}
}
