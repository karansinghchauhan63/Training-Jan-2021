import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngifexample',
  templateUrl: './ngifexample.component.html',
  styleUrls: ['./ngifexample.component.css']
})
export class NgifexampleComponent implements OnInit {
show:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

  showorhide()
  {
    if(this.show==true)
    {
      this.show=false;
    }
    else
    {
      this.show=true;
    }
  }
}
