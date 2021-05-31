import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  radius:number;
  result:number;

  area() : void {
    this.result = 3.14 * this.radius * this.radius;
  }
}
