import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  
  studentForm: FormGroup;
  @Output() studentData = new EventEmitter();

  constructor(private fb: FormBuilder) {
  
  }

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      Name:[''],
      BirthDate:[''],
      BirthPlace:[''],
      EducationalQualification:[''],
      Address:[''],
      FatherName:[''],
      FatherContactNo:[''],
      MotherName:[''],
      MotherContactNo:['']
    });
  }


  sendData(): void {
    this.studentData.emit(this.studentForm.value);
  }

}
