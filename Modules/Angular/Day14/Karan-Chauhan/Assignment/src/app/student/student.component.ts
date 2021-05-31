import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Student } from '../IStudent';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers:[StudentServiceService]
})
export class StudentComponent implements OnInit {

  title = 'Assignment';

 
 
  constructor(private service: StudentServiceService) {
  
  }

  StudentList:Student[]=[];

  stdRecord:Student={
    StudentFirstName:"",
    StudentMiddleName:"",
    StudentLastName:"",
    DateOfBirth:"",
    BirthPlace:"",
    FirstLanguage:"",
    City:"",
    State:"",
    Country:"",
    Pincode:100000,
    FatherFirstName:"",
    FatherMiddleName:"",
    FatherLastName:"",
    FatherEmail:"",
    FatherEducation:"",
    FatherProfession:"",
    FatherDesignation:"",
    FatherPhoneNo:0,
    MotherFirstName:"",
    MotherMiddleName:"",
    MotherLastName:"",
    MotherEmail:"",
    MotherEducation:"",
    MotherProfession:"",
    MotherDesignation:"",
    MotherPhoneNo:0,
    EmergencyContactRelation:"",
    EmergencyContactNumber:0,
    ReferenceName:"",
    ReferenceAddress:"",
    ReferenceContactNumber:0
  };
  ngOnInit(){
    this.StudentList = this.service.ReturningData();
  }


@Output() emitter = new EventEmitter();

reset(){
  this.stdRecord={
    StudentFirstName:"",
    StudentMiddleName:"",
    StudentLastName:"",
    DateOfBirth:"",
    BirthPlace:"",
    FirstLanguage:"",
    City:"",
    State:"",
    Country:"",
    Pincode:100000,
    FatherFirstName:"",
    FatherMiddleName:"",
    FatherLastName:"",
    FatherEmail:"",
    FatherEducation:"",
    FatherProfession:"",
    FatherDesignation:"",
    FatherPhoneNo:0,
    MotherFirstName:"",
    MotherMiddleName:"",
    MotherLastName:"",
    MotherEmail:"",
    MotherEducation:"",
    MotherProfession:"",
    MotherDesignation:"",
    MotherPhoneNo:0,
    EmergencyContactRelation:"",
    EmergencyContactNumber:0,
    ReferenceName:"",
    ReferenceAddress:"",
    ReferenceContactNumber:0
  };
} 

 // myList:Array<any>=[];
  onSubmit(){

   this.service.InsertStudent(this.stdRecord);
   this.emitter.emit(this.StudentList);
   this.reset();
  }

}
