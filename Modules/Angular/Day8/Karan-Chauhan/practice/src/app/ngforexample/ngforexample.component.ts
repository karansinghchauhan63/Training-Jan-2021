import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngforexample',
  templateUrl: './ngforexample.component.html',
  styleUrls: ['./ngforexample.component.css']
})
export class NgforexampleComponent implements OnInit {

  productList:Array<any>=[];
  constructor() { 
    this.productList=[
      {ProductName:"Pen", ProductPrice:30, ProductQuantity:150},
      {ProductName:"Pencil", ProductPrice:10, ProductQuantity:150}
    ]
  }

  ngOnInit(): void {
  }

}
