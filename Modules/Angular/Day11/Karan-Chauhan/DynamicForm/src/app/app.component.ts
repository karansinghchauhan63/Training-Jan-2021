import { Component } from '@angular/core';
import { QuestionBase } from './questionbase';
import { QuestionService } from './question.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[QuestionService]
})
export class AppComponent {
  title = 'DynamicForm';
  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
}
