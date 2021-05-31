import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../questionbase';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() question: QuestionBase<string>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }

}
