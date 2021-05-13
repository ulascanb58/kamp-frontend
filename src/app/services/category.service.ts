import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root',
})
export class CategoryService {
 

  apiUrl = 'https://localhost:44316/api/categories/getall';
  getCategories(): Observable<ListResponseModel<Category>> {
   return this.httpClient
      .get<ListResponseModel<Category>>(this.apiUrl);
  }

  constructor(private httpClient: HttpClient) {}
}
