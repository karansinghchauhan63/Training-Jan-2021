import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrayComponent } from '../array/array.component';
import { Day15assignmentComponent } from '../day15assignment/day15assignment.component';
import { Day15practiceComponent } from '../day15practice/day15practice.component';
import { Day16assignmentComponent } from '../day16assignment/day16assignment.component';
import { Day16practiceComponent } from '../day16practice/day16practice.component';
import { Day17assignmentComponent } from '../day17assignment/day17assignment.component';
import { Day17practiceComponent } from '../day17practice/day17practice.component';
import { Day18assignmentComponent } from '../day18assignment/day18assignment.component';
import { Day18practiceComponent } from '../day18practice/day18practice.component';
import { Day19assignmentComponent } from '../day19assignment/day19assignment.component';
import { Day20assignmentComponent } from '../day20assignment/day20assignment.component';
import { Day20practiceComponent } from '../day20practice/day20practice.component';
import { SidebarJsComponent } from '../sidebar-js/sidebar-js.component';

const routes: Routes = [
  {path:'js',component:SidebarJsComponent, children:[
    {path:'array',component:ArrayComponent},
    {path:'day15practice',component:Day15practiceComponent},
    {path:'day16practice',component:Day16practiceComponent},
    {path:'day17practice',component:Day17practiceComponent},
    {path:'day18practice',component:Day18practiceComponent},
    {path:'day20practice',component:Day20practiceComponent},
    {path:'day15assignment',component:Day15assignmentComponent},
    {path:'day16assignment',component:Day16assignmentComponent},
    {path:'day17assignment',component:Day17assignmentComponent},
    {path:'day18assignment',component:Day18assignmentComponent},
    {path:'day19assignment',component:Day19assignmentComponent},
    {path:'day20assignment',component:Day20assignmentComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JsRoutingModule { }
