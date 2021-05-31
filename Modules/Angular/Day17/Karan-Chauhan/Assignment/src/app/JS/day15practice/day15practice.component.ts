import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day15practice',
  templateUrl: './day15practice.component.html',
  styleUrls: ['./day15practice.component.css']
})
export class Day15practiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadscript('/assets/js/day15practice.js');
  }

  loadscript(src:any){
    var script = document.createElement("script");
    script.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src = src;
  }

}
