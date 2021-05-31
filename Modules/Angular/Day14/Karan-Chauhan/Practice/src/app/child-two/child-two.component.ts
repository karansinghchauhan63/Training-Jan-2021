import { Component, Input, OnInit } from '@angular/core';
import { CrudOperationService } from '../crud-operation.service';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css'],
  providers: [CrudOperationService]
})
export class ChildTwoComponent implements OnInit {

  constructor(private service : CrudOperationService) { }

  @Input() dataobj:any;

  StudentList:Array<any>=[];
  ngOnInit(): void {

  }

  show()
  {
    this.StudentList.push(this.dataobj);
  }

  delete(name)
  {
    this.service.DeleteData(this.StudentList,name);
  }
  
}
