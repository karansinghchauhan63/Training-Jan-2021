import { Component, OnInit } from '@angular/core';
import { assignment } from '../../assets/js/assignment';
@Component({
  selector: 'app-day15assignment',
  templateUrl: './day15assignment.component.html',
  styleUrls: ['./day15assignment.component.css']
})
export class Day15assignmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    assignment();
  }

}
