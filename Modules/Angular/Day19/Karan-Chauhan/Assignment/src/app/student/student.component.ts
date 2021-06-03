import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { CheckAge, IsCharacter, IsDigit } from '../custom.validators';
import { Student } from '../Model/StudentInterface';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  title = 'Assignment';

  studentForm: FormGroup;
  studentList: Student[] = [];
  id:number;
  constructor(private fb: FormBuilder, private Service: StudentService) {

  }

  getStudent() {
    this.Service.getStudents().subscribe(
      (res: Student[]) => {
        console.log(res)
        this.studentList = res;
        console.log(this.studentList);
      },
      (err) => { console.log(err) }
    );
  }


  ngOnInit() {

    this.getStudent();

    this.studentForm = this.fb.group({
      StudentFirstName: ['', Validators.required],
      StudentMiddleName: ['', Validators.required],
      StudentLastName: ['', Validators.required],
      BirthDate: ['', Validators.required],
      BirthPlace: ['', Validators.required],
      FirstLanguage: ['', Validators.required],
      City: ['', Validators.required],
      State: ['', Validators.required],
      Country: ['', Validators.required],
      PinCode: ['', Validators.required],
      FatherFirstName: ['', Validators.required],
      FatherMiddleName: ['', Validators.required],
      FatherLastName: ['', Validators.required],
      FatherEmail: ['', Validators.required],
      FatherEducation: ['', Validators.required],
      FatherProfession:['', Validators.required],
      FatherDesignation: ['', Validators.required],
      FatherPhoneNumber: ['', Validators.required],
      MotherFirstName: ['', Validators.required],
      MotherMiddleName: ['', Validators.required],
      MotherLastName: ['', Validators.required],
      MotherEmail: ['', Validators.required],
      MotherEducation: ['', Validators.required],
      MotherProfession: ['', Validators.required],
      MotherDesignation: ['', Validators.required],
      MotherPhoneNumber: ['', Validators.required],
      EmergencyContactNumber: ['', Validators.required],
      EmergencyRelation: ['', Validators.required],
      ReferenceContactNumber: ['', Validators.required],
      ReferenceName: ['', Validators.required],
      ReferenceAddress: ['', Validators.required]
    });
  }





  onSubmit() {
    var studentdata: Student =
    {
      studentFirstName: this.studentForm.value.StudentFirstName,
      studentMiddleName: this.studentForm.value.StudentMiddleName,
      studentLastName: this.studentForm.value.StudentLastName,
      birthDate: this.studentForm.value.BirthDate,
      birthPlace: this.studentForm.value.BirthPlace,
      firstLanguage: this.studentForm.value.FirstLanguage,
      city: this.studentForm.value.City,
      state: this.studentForm.value.State,
      country: this.studentForm.value.Country,
      pinCode: this.studentForm.value.PinCode,
      fatherFirstName: this.studentForm.value.FatherFirstName,
      fatherMiddleName: this.studentForm.value.FatherMiddleName,
      fatherLastName: this.studentForm.value.FatherLastName,
      fatherEmail: this.studentForm.value.FatherEmail,
      fatherEducation: this.studentForm.value.FatherEducation,
      fatherProfession:this.studentForm.value.FatherProfession,
      fatherDesignation: this.studentForm.value.FatherDesignation,
      fatherPhoneNumber: this.studentForm.value.FatherPhoneNumber,
      motherFirstName: this.studentForm.value.MotherFirstName,
      motherMiddleName: this.studentForm.value.MotherMiddleName,
      motherLastName: this.studentForm.value.MotherLastName,
      motherEmail: this.studentForm.value.MotherEmail,
      motherEducation: this.studentForm.value.MotherEducation,
      motherProfession:this.studentForm.value.MotherProfession,
      motherDesignation: this.studentForm.value.MotherDesignation,
      motherPhoneNumber: this.studentForm.value.MotherPhoneNumber,
      emergencyContactNumber: this.studentForm.value.EmergencyContactNumber,
      emergencyRelation: this.studentForm.value.EmergencyRelation,
      referenceContactNumber: this.studentForm.value.ReferenceContactNumber,
      referenceName: this.studentForm.value.ReferenceName,
      referenceAddress: this.studentForm.value.ReferenceAddress
    }

    console.log(studentdata);

    this.Service.InsertStudent(studentdata).subscribe(
      (res) => { console.log(res) },

      (err) => { console.log(err) }
    );

  }


  DeleteData(studentId) {

    this.Service.DeleteStudent(studentId).subscribe
      ((res) => { console.log(res) },
        (err) => { console.log(err) }
      );
  }


  editdata:Student=
  {
    studentFirstName:"",
    studentMiddleName:"",
    studentLastName:"",
    birthDate:new Date("4-5-1999"),
    birthPlace:"",
    firstLanguage:"",
    city:"",
    state:"",
    country:"",
    pinCode:"",
    fatherFirstName:"",
    fatherMiddleName:"",
    fatherLastName:"",
    fatherEmail:"",
    fatherEducation:"",
    fatherDesignation:"",
    fatherProfession:"",
    fatherPhoneNumber:0,
    motherFirstName:"",
    motherMiddleName:"",
    motherLastName:"",
    motherEmail:"",
    motherEducation:"",
    motherProfession:"",
    motherDesignation:"",
    motherPhoneNumber:0,
    emergencyContactNumber:"",
    emergencyRelation:"",
    referenceContactNumber:"",
    referenceName:"",
    referenceAddress:""
  };

  UpdateData(item)
  {
    this.id=item.studentId
    this.editdata.studentFirstName=item.studentFirstName;
    this.editdata.studentLastName=item.studentLastName;
    this.editdata.studentMiddleName=item.studentMiddleName;
    
    this.editdata.birthDate=item.birthDate;
    this.editdata.birthPlace=item.birthPlace;
    this.editdata.firstLanguage=item.firstLanguage;
    this.editdata.city=item.city;
    this.editdata.state=item.state;
    this.editdata.country=item.country;
    this.editdata.pinCode=item.pinCode;
    this.editdata.fatherFirstName=item.fatherFirstName;
    this.editdata.fatherMiddleName=item.fatherMiddleName;
    this.editdata.fatherLastName=item.fatherLastName;
    this.editdata.fatherEmail=item.fatherEmail;
    this.editdata.fatherEducation=item.fatherEducation;
    this.editdata.fatherProfession=item.fatherProfession;
    this.editdata.fatherDesignation=item.fatherDesignation;
    this.editdata.fatherPhoneNumber=item.fatherPhoneNumber

    this.editdata.motherFirstName=item.motherFirstName;
    this.editdata.motherMiddleName=item.motherMiddleName;
    this.editdata.motherLastName=item.motherLastName;
    this.editdata.motherEmail=item.motherEmail;
    this.editdata.motherEducation=item.motherEducation;
    this.editdata.motherProfession=item.motherProfession;
    this.editdata.motherDesignation=item.motherDesignation;
    this.editdata.motherPhoneNumber=item.motherPhoneNumber;

    this.editdata.emergencyContactNumber=item.emergencyContactNumber;
    this.editdata.emergencyRelation=item.emergencyRelation;
    this.editdata.referenceName=item.referenceName;
    this.editdata.referenceAddress=item.referenceAddress;
    this.editdata.referenceContactNumber=item.referenceContactNumber;

  }


  Updateddata()
  {
    var UpdatedRecord:Student=
    {
      studentFirstName:this.studentForm.value.StudentFirstName,
      studentMiddleName:this.studentForm.value.StudentMiddleName,
      studentLastName:this.studentForm.value.StudentLastName,
      birthDate:this.studentForm.value.BirthDate,
      birthPlace:this.studentForm.value.BirthPlace,
      firstLanguage:this.studentForm.value.FirstLanguage,
      city:this.studentForm.value.City,
      state:this.studentForm.value.State,
      country:this.studentForm.value.Country,
      pinCode:this.studentForm.value.PinCode,
      fatherFirstName:this.studentForm.value.FatherFirstName,
      fatherMiddleName:this.studentForm.value.FatherMiddleName,
      fatherLastName:this.studentForm.value.FatherLastName,
      fatherEmail:this.studentForm.value.FatherEmail,
      fatherEducation:this.studentForm.value.FatherEducation,
      fatherProfession:this.studentForm.value.FatherProfession,
      fatherDesignation:this.studentForm.value.FatherDesignation,
      fatherPhoneNumber:this.studentForm.value.FatherPhoneNumber,
      motherFirstName:this.studentForm.value.MotherFirstName,
      motherMiddleName:this.studentForm.value.MotherMiddleName,
      motherLastName:this.studentForm.value.MotherLastName,
      motherEmail:this.studentForm.value.MotherEmail,
      motherEducation:this.studentForm.value.MotherEducation,
      motherProfession:this.studentForm.value.MotherProfession,
      motherDesignation:this.studentForm.value.MotherDesignation,
      motherPhoneNumber:this.studentForm.value.MotherPhoneNumber,
      emergencyRelation:this.studentForm.value. EmergencyRelation,
      emergencyContactNumber:this.studentForm.value.EmergencyContactNumber,
      referenceName:this.studentForm.value.ReferenceName,
      referenceAddress:this.studentForm.value.ReferenceAddress,
      referenceContactNumber:this.studentForm.value.ReferenceContactNumber
      
    }

    this.Service.UpdateStudent(this.id,UpdatedRecord).subscribe
    (
      (res)=>{
        console.log(res)
       
      },
      (err)=>{console.log(err)}
    );

  }
}
