import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  username:string;
  password:string;
  output:string;

  validate(): void{
    if(this.username == "admin" && this.password == "admin")
    {
      this.output="Login successful!"
    }
    else
    {
      this.output = "Invalid username and password!"
    }
  }
}
