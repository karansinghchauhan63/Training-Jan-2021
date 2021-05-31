import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  n1:number;
  n2:number;
  result:string;

  add():void {
    this.result = `Addition of two numbers is ${this.n1+this.n2}`;
  }

  sub():void {
    this.result = `Subtraction of two numbers is ${this.n1-this.n2}`;
  }

  mul():void {
    this.result = `Multiplication of two numbers is ${this.n1*this.n2}`;
  }


}
