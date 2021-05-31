import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day16practice',
  templateUrl: './day16practice.component.html',
  styleUrls: ['./day16practice.component.css']
})
export class Day16practiceComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    this.loadscript('/assets/js/day16practice.js');
  }

  loadscript(src:any){
    var script = document.createElement("script");
    script.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src = src;
  }
}
