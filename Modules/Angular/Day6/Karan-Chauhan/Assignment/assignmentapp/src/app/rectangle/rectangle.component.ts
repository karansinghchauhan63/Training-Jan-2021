import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  length:number;
  breadth:number;
  result:number;

  area():void{
    this.result = this.length * this.breadth;
  }
}
