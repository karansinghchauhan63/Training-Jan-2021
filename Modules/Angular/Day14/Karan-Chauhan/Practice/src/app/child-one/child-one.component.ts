import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {

  constructor(private fb : FormBuilder) {
   }

   StudentData: FormGroup;

  ngOnInit(): void {

    this.StudentData = this.fb.group({
      Name:[''],
      Address:[''],
      ContactNo:['']
    })
  }

  @Output() student = new EventEmitter();

  sendData(){
    this.student.emit(this.StudentData.value);
  }

}
