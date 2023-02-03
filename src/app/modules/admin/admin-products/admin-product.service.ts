import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/shared/models/page';
import { AdminProduct } from './adminProducts';

@Injectable({
  providedIn: 'root'
})
export class AdminProductService {


  constructor(private http:HttpClient) { }

  getProducts(page: number, size: number): Observable<Page<AdminProduct>> {
    return this.http.get<Page<AdminProduct>>("/api/products?page=" + page + "&size=" + size);
  }
}
