import { Component, OnInit } from '@angular/core';
import { FormArray, FormArrayName, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'Practice';
  genders = ['Male', 'Female'];
  
  signupForm: FormGroup;
 
  constructor() {
    this.signupForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null,[Validators.required, Validators.email]),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([new FormControl()])
    });
  }

  ngOnInit(){

  }

  onSubmit(){
    console.log(this.signupForm);
  }
  
  get getHobbies(){
    return this.signupForm.get('hobbies') as FormArray;
  }
  onAddHobby(){
    //const control = new FormControl(null, Validators.required);
   // (<FormArray>this.signupForm.get('hobbies')).push(control);
   this.getHobbies.push(new FormControl());
  }
}
