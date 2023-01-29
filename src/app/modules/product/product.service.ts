import { Injectable } from '@angular/core';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return [
      {
        name: "Banan",
        category: "Owoce"
      },
      {
        name: "Jabłko",
        category: "Owoce"
      },
      {
        name: "Śliwka",
        category: "Owoce"
      },
      {
        name: "Gruszka",
        category: "Owoce"
      },
      {
        name: "Morela",
        category: "Owoce"
      }
    ]
  }
}
