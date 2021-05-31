import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {
  constructor() {
    var city = ["Ahmedabad", "Delhi", "Jaipur", "Mumbai", "Goa"]
    var i:number;            
    for (i = 0; i < city.length; i++) {
        alert(city[i]);
        console.log(city[i]);
    }
    
   }

  ngOnInit(): void {
  }

}
