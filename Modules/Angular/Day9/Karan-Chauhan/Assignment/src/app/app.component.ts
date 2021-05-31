import { Component, OnInit } from '@angular/core';
import { FormArray, FormArrayName, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { CheckAge, IsCharacter, IsDigit } from './custom.validators';
import { StudentList } from './StudentInterface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Assignment';

  studentData = new Array<StudentList>();
  studentForm: FormGroup;
 
  constructor(private fb: FormBuilder) {
  
  }

  ngOnInit(){
    this.studentForm = this.fb.group({
      studentname: this.getName(),
      dob:['',[Validators.required,CheckAge]],
      birthplace:['',Validators.required],
      firstlanguage:['',Validators.required],
      address: this.fb.group({
        city:['',Validators.required],
        state:['',Validators.required],
        country:['',Validators.required],
        pincode:['',[Validators.required,Validators.minLength(6),Validators.maxLength(6),IsDigit]]
      }),
      fathername: this.getName(),
      fatherdetails: this.getDetails(),
      mothername: this.getName(),
      motherdetails: this.getDetails(),

      emergencycontact : this.fb.array([
        this.emergencyContact()
      ]),

      reference : this.fb.array([
        this.getReference()
      ])
    });
  }

  onAddEmergency(){
    (<FormArray>this.studentForm.get('emergencycontact')).push(this.emergencyContact());
  }

  onAddReference(){
    (<FormArray>this.studentForm.get('reference')).push(this.getReference());
  }

  emergencyContact(): FormGroup{
    return this.fb.group({
      relation: ['',Validators.required],
      contactno: ['',[Validators.required,Validators.minLength(8),Validators.maxLength(11),IsDigit]]
    });
  }

  getReference(): FormGroup{
    return this.fb.group({
      referencename:['',[Validators.required,Validators.minLength(2),Validators.maxLength(15)]],
      address:['',Validators.required],
      contactno:['',[Validators.required,Validators.minLength(8),Validators.maxLength(11), IsDigit]]
    });
  }

  getName(): FormGroup{
    return this.fb.group({
      firstname: ['', [Validators.required,Validators.minLength(2),Validators.maxLength(15),IsCharacter]],
      middlename:['',[Validators.required,Validators.minLength(2),Validators.maxLength(15),IsCharacter]],
      lastname:['', [Validators.required,Validators.minLength(2),Validators.maxLength(15),IsCharacter]]
    });
  }

  getDetails(): FormGroup{
    return this.fb.group({
      email:['',[Validators.required,Validators.email]],
      education:['',Validators.required],
      profession:['',Validators.required],
      designation:['',Validators.required],
      phoneno:['',[Validators.required,Validators.minLength(8),Validators.maxLength(11),IsDigit]]
    });
  }

 

  onSubmit(){
    this.studentData.push(this.studentForm.value);
    console.log(this.studentForm.value);
  }
  
}
