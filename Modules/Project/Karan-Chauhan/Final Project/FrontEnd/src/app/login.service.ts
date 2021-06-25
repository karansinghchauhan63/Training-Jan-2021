import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './Models/CustomerInterface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url:string="http://20.198.103.48:1011/api/Customer";
  constructor(private http:HttpClient) { }
  temp:any;
  activeuserFlag:boolean;
  activeUser:Customer;
  httpoption={
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }

  loginUserActivate(flag:boolean){
    this.activeuserFlag = flag;
  }

  loginUserStatus(){
    return this.activeuserFlag;
  }
  GetAllCustomers():Observable<Customer[]>
  {
    return this.http.get<Customer[]>(this.url);
  }

  RegisterCustomer(customer:Customer):Observable<Customer>
  {
    // console.log("rc");
    // console.log(customer);
    return this.http.post<Customer>(this.url,customer,this.httpoption);
  }

  activeUserData(data)
  {
    this.activeUser = data;
  }

  sendActiveUserData(){
    return this.activeUser;
  }
}
