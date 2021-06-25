import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/booking.service';
import { CartService } from 'src/app/cart.service';
import { LoginService } from 'src/app/login.service';
import { Product } from 'src/app/Models/ProductInterface';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  constructor(private Service:ProductService, private bookingservice:BookingService, private loginService : LoginService, private cartService : CartService) { }
  productList: Product[] = [];
 
  
  ngOnInit(): void {
    this.getProducts("Offers");
  }

  getProducts(category) {
    this.Service.getProductsByCategory(category).subscribe(
      (res: Product[]) => {
        console.log(res)
        this.productList = res;
      },
      (err) => { console.log(err) }
    );
  }

  buyProduct(item){
    if(this.loginService.loginUserStatus() == true){
      this.bookingservice.buyProduct(item);
      
    }
    else
    {
      alert("Please login to buy product!")
      location.reload();
    }
  }


  
  addToCart(item){
    if(this.loginService.loginUserStatus() == true){
      this.cartService.addToCart(item);      
    }
    else
    {
      alert("Please login to add product to cart!");
      location.reload();
    }
  }
  

  
}
