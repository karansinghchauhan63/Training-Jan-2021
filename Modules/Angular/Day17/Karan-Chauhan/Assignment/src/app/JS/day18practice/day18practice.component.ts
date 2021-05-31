import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day18practice',
  templateUrl: './day18practice.component.html',
  styleUrls: ['./day18practice.component.css']
})
export class Day18practiceComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
    this.loadscript('/assets/js/day18practice.js');
  }

  loadscript(src:any){
    var script = document.createElement("script");
    script.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src = src;
  }

}
