import { Inject, Injectable } from '@angular/core';
import { Student } from './IStudent'
import { LoggerService } from './logger.service';
@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  stdRecord: Array<Student> = [{
    StudentFirstName: "Karan",
    StudentMiddleName: "Singh",
    StudentLastName: "Chauhan",
    DateOfBirth: "09/09/1999",
    BirthPlace: "Ahmedabad",
    FirstLanguage: "Hindi",
    City: "Ahmedabad",
    State: "Gujarat",
    Country: "India",
    Pincode: 323232,
    FatherFirstName: "Karan",
    FatherMiddleName: "Singh",
    FatherLastName: "Chauhan",
    FatherEmail: "k@gmail.com",
    FatherEducation: "Graduate",
    FatherProfession: "Engineer",
    FatherDesignation: "Senior Developer",
    FatherPhoneNo: 3232323,
    MotherFirstName: "ABC",
    MotherMiddleName: "XDF",
    MotherLastName: "ERE",
    MotherEmail: "k@gmail.com",
    MotherEducation: "BEd",
    MotherProfession: "Teacher",
    MotherDesignation: "Teacher",
    MotherPhoneNo: 8989,
    EmergencyContactRelation: "Friend",
    EmergencyContactNumber: 889898,
    ReferenceName: "Mr. James",
    ReferenceAddress: "Mumbai",
    ReferenceContactNumber: 898898
  }];
  constructor(@Inject (LoggerService) private LoggerService) { 

  }

  ReturningData() {
    return this.stdRecord;
  }
  InsertStudent(StudentForm) {

    this.stdRecord.push(StudentForm);
    this.LoggerService.log("Student Data is inserted!");
    
    // console.log(StudentForm);
    // return StudentForm;
  }

  DeleteStudent(name,obj){
    var del = obj.find(x=>x.StudentFirstName==name);
    var i = obj.indexOf(del);
    obj.splice(i,1);
    this.stdRecord=obj;
    this.LoggerService.log("Student Data is deleted!");

  }

  //   DeleteStudent(obj:Array<any>,StudentFirstName:string)
  //   {
  //     var data=obj.find(s=>s.StudentFirstName==StudentFirstName);
  //     var d=obj.indexOf(s=>s.StudentFirstName==data.StudentFirstName);
  //     obj.splice(d,1)
  //  }

    UpdateStudent(item,std:Array<Student>)
    {
      var temp = std.find(x=>x.StudentFirstName==item.StudentFirstName);
      var i = std.indexOf(temp);
      std[i]=item;
      this.LoggerService.log("Student Data is updated!");
      return std;
    }

  //   DisplayStudent()
  //   {
  //     console.log(this.stdRecord)
  //     return this.stdRecord;
  //   }
}
