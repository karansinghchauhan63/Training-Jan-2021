import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IsCharacter, IsDigit } from '../app/custom.validators'
import { BookingService } from './booking.service';
import { CartService } from './cart.service';
import { LoginService } from './login.service';
import { Customer } from './Models/CustomerInterface';
import { Order } from './Models/OrderInterface';
import { Product } from './Models/ProductInterface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shopclues';
  registrationForm: FormGroup;
  loginForm: FormGroup;
  orderForm: FormGroup;
  flag1: boolean;
  flag2: boolean;
  loginFlag: boolean = false;
  registeredUsers: Customer[] = [];
  activeUser: Customer;
  cartProducts: Order[] = [];
  temp: Product[];
  quantity: number = 1;
  purchaseDate: Date;
  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router, private cartService: CartService, private Service: BookingService) {

  }

  customerData: Customer = {
    name: "",
    email: "",
    contactNumber: "",
    password: ""

  };
  passwordValidator() {
    if (this.registrationForm.value.Password != this.registrationForm.value.ConfirmPassword) {
      alert("Password and Confirm Password not matched!");
      return false;
    }
    else
      return true;
  }
  date = new Date();
  ngOnInit(): void {
    this.purchaseDate = this.date;
    this.getRegisteredUsers();

    this.registrationForm = this.fb.group({
      Name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), IsCharacter]],
      Email: ['', [Validators.required, Validators.email]],
      ContactNumber: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12), IsDigit]],
      Password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      ConfirmPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    });

    this.loginForm = this.fb.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    });


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

  }

  getRegisteredUsers() {
    this.loginService.GetAllCustomers().subscribe(
      (res: Customer[]) => {
        console.log(res)
        this.registeredUsers = res;
        console.log(this.registeredUsers);
      },
      (err) => { console.log(err) }
    );
  }

  newUserValidator(email) {
    for (const iterator of this.registeredUsers) {
      if (email == iterator.email) {
        alert("Email address already registered!")
        return false;
      }
    }
    return true;
  }

  register() {
    this.flag1 = this.passwordValidator();
    this.flag2 = this.newUserValidator(this.registrationForm.value.Email);
    if (this.flag1 == true && this.flag2 == true) {
      this.customerData.name = this.registrationForm.value.Name;
      this.customerData.email = this.registrationForm.value.Email;
      this.customerData.contactNumber = this.registrationForm.value.ContactNumber;
      this.customerData.password = this.registrationForm.value.Password;

      this.loginService.RegisterCustomer(this.customerData).subscribe(
        (res) => { console.log(res) },

        (err) => { console.log(err) }
      );;
      console.log("REGISTERATION SUCCESSFULL!");
      console.log(this.customerData);
    }
  }

  validateLogin() {
    for (const iterator of this.registeredUsers) {
      if (this.loginForm.value.Email == iterator.email && this.loginForm.value.Password == iterator.password) {
        this.activeUser = iterator;
        this.loginService.activeUserData(this.activeUser);
        console.log(this.activeUser);
        return true;
      }
    }
    return false;
  }

  mainlogin() {
    if (this.validateLogin() == true) {
      this.loginFlag = true;
      this.loginService.loginUserActivate(this.loginFlag);
      alert("Login Successful!");
    }
    else {
      alert("Invalid username and password!");
    }
    console.log(this.loginForm.value);
  }

  sendingToMyOrder() {
    this.router.navigate(["myorders"]);
  }


  showCart() {
    this.temp = this.cartService.sendCart();
    console.log(this.temp);
  }

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
  i: number;
  buyCart() {

    for (this.i = 0; this.i < this.temp.length; this.i++) {
    
      this.orderData = {
        productId: this.temp[this.i].productId,
        customerId: this.activeUser.customerId,
        productName: this.temp[this.i].productName,
        amountPaid: this.temp[this.i].price,
        quantity: 1,
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

  }
}
