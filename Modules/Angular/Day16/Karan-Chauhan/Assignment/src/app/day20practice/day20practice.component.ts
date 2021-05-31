import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day20practice',
  templateUrl: './day20practice.component.html',
  styleUrls: ['./day20practice.component.css']
})
export class Day20practiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadscript('/assets/js/day20practice.js');
  }

  loadscript(src:any){
    var script = document.createElement("script");
    script.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src = src;
  }
}
