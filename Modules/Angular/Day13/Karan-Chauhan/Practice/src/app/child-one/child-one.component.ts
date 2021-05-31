import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent {

  handleclick(){
    console.log("Clicked in child!");
  }


  @Output() valueChange = new EventEmitter();
  counter = 0;

  valueChanged() { // You can give any function name

      this.counter = this.counter + 1;
      this.valueChange.emit(this.counter);
  }
  
}
