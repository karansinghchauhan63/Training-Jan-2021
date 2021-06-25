import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './Models/OrderInterface';
import { Product } from './Models/ProductInterface';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  url:string="http://20.198.103.48:1011/api/Orders";
  constructor(private http:HttpClient) { }

  httpoption={
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }


  object:Product[]=[];
  buyProduct(item:Product){
   // console.log("Service");
    this.object[0] = item;
  }

  sendProduct(){
    return this.object;
  }

  GetMyOrders(customerId:number):Observable<Order[]>
  {
    console.log("CALL");
    return this.http.get<Order[]>(this.url+`/${customerId}`);
  }

  PlaceOrder(order:Order):Observable<Order>
  {
    return this.http.post<Order>(this.url,order,this.httpoption);
  }

}
