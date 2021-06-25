import { Injectable } from '@angular/core';
import { Order } from './Models/OrderInterface';
import { Product } from './Models/ProductInterface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  cartProducts : Product[] = [];
  addToCart(item){
    this.cartProducts.push(item);
  }

  sendCart(){    
   return this.cartProducts;
  }
}
