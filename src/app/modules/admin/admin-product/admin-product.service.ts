import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/modules/common/model/page';
import { AdminProduct } from './adminProducts';

@Injectable({
  providedIn: 'root'
})
export class AdminProductService {
  
  constructor(private http:HttpClient) { }

  getProducts(page: number, size: number): Observable<Page<AdminProduct>> {
    return this.http.get<Page<AdminProduct>>("/api/products?page=" + page + "&size=" + size);
  }

  delete(id: number) {
    return this.http.delete<void>('/api/admin/products/' + id)
  }
}
