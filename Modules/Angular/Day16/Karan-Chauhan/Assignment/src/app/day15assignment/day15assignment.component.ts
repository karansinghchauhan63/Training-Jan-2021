import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day15assignment',
  templateUrl: './day15assignment.component.html',
  styleUrls: ['./day15assignment.component.css']
})
export class Day15assignmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadscript('/assets/js/day15assignment.js');
  }

  loadscript(src:any){
    var script = document.createElement("script");
    script.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src = src;
  }
}


