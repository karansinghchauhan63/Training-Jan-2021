import { Component } from '@angular/core';
import {Student} from './student';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'TemplateDriven';
  grades = ['A','B','C','D','F'];

  model = new Student(101, 'Karan', '10', this.grades[1]);

  submitted = false;

  onSubmit() {this.submitted = true;}

 // studentData = new Student(102,'Jay','11', 'A');

 newStudent(){
  this.model = new Student(102,'Jay','11', 'A');
}

}


