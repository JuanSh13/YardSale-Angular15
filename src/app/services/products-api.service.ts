import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  // Url de la API
  private apiUrl = "https://fakestoreapi.com/products";

  // Importación del módulo HttpClient
  constructor(
    private http: HttpClient
  ) { }

  // Obtiene todos los productos del API en una array
  getAllProducts() {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProduct(id: string) {
    return this.http.get<Product[]>(`${this.apiUrl}/${id}`);
  }
}
