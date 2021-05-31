import { Component, OnChanges, OnInit } from '@angular/core';
import { Student } from '../IStudent';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  providers:[StudentServiceService]
})
export class StudentListComponent implements OnInit, OnChanges {
  
  stdRecord:Array<Student>;
  stdyRecord:Student={
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

  constructor(private service : StudentServiceService) {
    this.stdRecord = this.service.ReturningData();
   }
  ngOnInit(): void {
  }

  ngOnChanges(){
    this.stdRecord=this.service.ReturningData();
  }

  InsertStudent(data){
    this.stdRecord = data;
  }

  DeleteData(data,obj){
    this.service.DeleteStudent(data,obj);
   // this.service.DeleteStudent(this.stdRecord,data);
  }

  UpdateData(data){
    this.stdyRecord={
      StudentFirstName:data.StudentFirstName,
      StudentMiddleName:data.StudentMiddleName,
      StudentLastName:data.StudentLastName,
      DateOfBirth:data.DateOfBirth,
      BirthPlace:data.BirthPlace,
      FirstLanguage:data.FirstLanguage,
      City:data.City,
      State:data.State,
      Country:data.Country,
      Pincode:data.Pincode,
      FatherFirstName:data.FatherFirstName,
      FatherMiddleName:data.FatherMiddleName,
      FatherLastName:data.FatherLastName,
      FatherEmail:data.FatherEmail,
      FatherEducation:data.FatherEducation,
      FatherProfession:data.FatherProfession,
      FatherDesignation:data.FatherDesignation,
      FatherPhoneNo:data.FatherPhoneNo,
      MotherFirstName:data.MotherFirstName,
      MotherMiddleName:data.MotherMiddleName,
      MotherLastName:data.MotherLastName,
      MotherEmail:data.MotherEmail,
      MotherEducation:data.MotherEducation,
      MotherProfession:data.MotherProfession,
      MotherDesignation:data.MotherDesignation,
      MotherPhoneNo:data.MotherPhoneNo,
      EmergencyContactRelation:data.EmergencyContactRelation,
      EmergencyContactNumber:data.EmergencyContactNumber,
      ReferenceName:data.ReferenceName,
      ReferenceAddress:data.ReferenceAddress,
      ReferenceContactNumber:data.ReferenceContactNumber
    };
  }

  UpdatedData(obj){
    console.log("updated");
   this.stdRecord = this.service.UpdateStudent(obj,this.stdRecord);
   console.log(this.stdRecord);

  }
  // DisplayTable()
  // {
  //   this.stdRecord = this.service.DisplayStudent();
  //   console.log(this.stdRecord);
  // }
}
