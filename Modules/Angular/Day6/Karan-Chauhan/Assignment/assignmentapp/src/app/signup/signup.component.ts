import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name:string;
  address:string;
  panno:string;
  status:string;
  signup(): void{

    if(this.name != null && this.address != null && this.panno != null)
    {
      this.status = "Sign Up successful!"
    }
    else
    {
      this.status = "Enter all details!"
    }
  }
}
