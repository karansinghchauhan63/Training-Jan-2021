import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../booking.service';
import { LoginService } from '../login.service';
import { Customer } from '../Models/CustomerInterface';
import { Order } from '../Models/OrderInterface';
import { Product } from '../Models/ProductInterface';


@Component({
  selector: 'app-buying',
  templateUrl: './buying.component.html',
  styleUrls: ['./buying.component.css']
})
export class BuyingComponent implements OnInit {

  constructor(private Service: BookingService, private fb: FormBuilder, private loginService: LoginService) { }

  orderForm: FormGroup;
  productList: Product[] = [];
  imgpath = "";
  quantity: number = 1;
  purchaseDate: Date;
  activeUser: Customer;

  amount: number;

  orderData: Order = {
    productId: 0,
    customerId: 0,
    productName: "",
    amountPaid: 0,
    quantity: 0,
    deliveryAddress: "",
    city: "",
    state: "",
    country: "",
    pinCode: 0,
    contactNumber: "",
    purchaseTime: null
  };

  date = new Date();

  ngOnInit(): void {
    this.productList = this.Service.sendProduct();
    
    this.purchaseDate = this.date;
    console.log(this.purchaseDate);
   // this.purchaseDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " - " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    this.orderForm = this.fb.group(
      {
        quantity: ['', Validators.required],
        address: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        country: ['', Validators.required],
        pincode: ['', Validators.required],
        contactnumber: ['', Validators.required]
      }
    );

    this.loadscript('../../assets/js/invoiceprint.js');
    this.loadstyle('../../assets/css/invoice.css');
    this.activeUser = this.loginService.sendActiveUserData();
  }

  orderProduct() {
    this.amount = this.orderForm.value.quantity * this.productList[0].price;
    // console.log(this.orderForm.value);
    this.orderData = {
      productId: this.productList[0].productId,
      customerId: this.activeUser.customerId,
      productName: this.productList[0].productName,
      amountPaid: this.amount,
      quantity: this.orderForm.value.quantity,
      deliveryAddress: this.orderForm.value.address,
      city: this.orderForm.value.city,
      state: this.orderForm.value.state,
      country: this.orderForm.value.country,
      pinCode: this.orderForm.value.pincode,
      contactNumber: this.orderForm.value.contactnumber,
      purchaseTime: this.purchaseDate
    };

    console.log(this.orderData);
    this.Service.PlaceOrder(this.orderData).subscribe(
      (res) => { console.log(res) },

      (err) => { console.log(err) }
    );;

  }


  loadscript(src: any) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src = src;
  }

  loadstyle(src: any) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    document.getElementsByTagName("head")[0].appendChild(link);
    link.href = src;
  }

}
