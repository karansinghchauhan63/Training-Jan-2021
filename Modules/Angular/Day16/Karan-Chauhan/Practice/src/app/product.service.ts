import { Injectable } from '@angular/core';
import { Product } from './product' ;
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(){}

  public getProducts() {
 
  let products:Product[]=[new Product(1,'Memory Card',500),
  new Product(2,'Pen Drive',750),
  new Product(3,'Power Bank',100)];


    return products;               
}


public getProduct(id:number) {
    let product:Product[]=this.getProducts();
    return product.find(p => p.productID==id);

}

}
