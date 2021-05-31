import { Component, OnInit } from '@angular/core';
import { Student } from './Istudent';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getColor(color:string){
    switch(color)
    {
      case "A": return "yellow";
      case "B": return "pink";
      case "C": return "green";
            
    }
  }
  studentList:Student[]=
    [
      {ID:1,Name:"Karan",Age:21,Average:78,Grade:"B",Status:"Active"},
      {ID:2,Name:"Jenil",Age:21,Average:58,Grade:"C",Status:"Active"},
      {ID:3,Name:"Mark",Age:22,Average:81,Grade:"A",Status:"Active"},
      {ID:4,Name:"Yash",Age:23,Average:76,Grade:"B",Status:"Inactive"}
    ]
  ;
}
