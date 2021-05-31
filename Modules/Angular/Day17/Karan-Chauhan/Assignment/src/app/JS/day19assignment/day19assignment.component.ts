import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day19assignment',
  templateUrl: './day19assignment.component.html',
  styleUrls: ['./day19assignment.component.css']
})
export class Day19assignmentComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    this.loadscript('/assets/js/day19assignment.js');
  }

  loadscript(src:any){
    var script = document.createElement("script");
    script.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src = src;
  }

}
