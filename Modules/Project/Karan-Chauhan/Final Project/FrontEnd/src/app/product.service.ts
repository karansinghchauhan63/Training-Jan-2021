import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from './Models/ProductInterface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url:string="http://20.198.103.48:1011/api/Products";
  constructor(private http:HttpClient) { }

  httpoption={
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }

  getProductsByCategory(category:string):Observable<Product[]>
  {
    return this.http.get<Product[]>(this.url+`/${category}`);
  }

}
