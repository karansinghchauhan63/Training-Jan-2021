import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { LoginService } from '../login.service';
import { Customer } from '../Models/CustomerInterface';
import { Order } from '../Models/OrderInterface';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {

  myordersList:Order[]=[];
  customerId:number;
  activeUser:Customer;
  constructor(private Service:BookingService, private loginService : LoginService) { }

  ngOnInit(): void {  
 
  }

  display(){
    this.activeUser = this.loginService.sendActiveUserData();
    this.customerId = this.activeUser.customerId;
    this.getMyOrders(this.customerId); 
  }
  getMyOrders(customerId) {
    this.Service.GetMyOrders(customerId).subscribe(
      (res: Order[]) => {
        console.log(res)
        this.myordersList = res;
      },
      (err) => { console.log(err) }
    );
  }

}
