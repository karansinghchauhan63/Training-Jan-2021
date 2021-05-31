import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day17practice',
  templateUrl: './day17practice.component.html',
  styleUrls: ['./day17practice.component.css']
})
export class Day17practiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadscript('/assets/js/day17practice.js');
  }

  loadscript(src:any){
    var script = document.createElement("script");
    script.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src = src;
  }

}
