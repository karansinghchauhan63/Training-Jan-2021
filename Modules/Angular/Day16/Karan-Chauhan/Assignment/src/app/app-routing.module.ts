import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ArrayComponent } from './array/array.component';
import { ArticleComponent } from './article/article.component';
import { ContactusComponent } from './contactus/contactus.component';
import { Day15assignmentComponent } from './day15assignment/day15assignment.component';
import { Day15practiceComponent } from './day15practice/day15practice.component';
import { Day16assignmentComponent } from './day16assignment/day16assignment.component';
import { Day16practiceComponent } from './day16practice/day16practice.component';
import { Day17assignmentComponent } from './day17assignment/day17assignment.component';
import { Day17practiceComponent } from './day17practice/day17practice.component';
import { Day18assignmentComponent } from './day18assignment/day18assignment.component';
import { Day18practiceComponent } from './day18practice/day18practice.component';
import { Day19assignmentComponent } from './day19assignment/day19assignment.component';
import { Day20assignmentComponent } from './day20assignment/day20assignment.component';
import { Day20practiceComponent } from './day20practice/day20practice.component';
import { Day4practiceComponent } from './day4practice/day4practice.component';
import { Day4resumeComponent } from './day4resume/day4resume.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { FlexComponent } from './flex/flex.component';
import { FlexexampleComponent } from './flexexample/flexexample.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GridComponent } from './grid/grid.component';
import { GridlayoutComponent } from './gridlayout/gridlayout.component';
import { HomeComponent } from './home/home.component';
import { HrlistComponent } from './hrlist/hrlist.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutpracticeComponent } from './layoutpractice/layoutpractice.component';
import { LoginformComponent } from './loginform/loginform.component';
import { MediademoComponent } from './mediademo/mediademo.component';
import { MedialayoutComponent } from './medialayout/medialayout.component';
import { MenuComponent } from './menu/menu.component';
import { MenulistComponent } from './menulist/menulist.component';
import { OverflowComponent } from './overflow/overflow.component';
import { PositionComponent } from './position/position.component';
import { ReportcardComponent } from './reportcard/reportcard.component';
import { SidebarcssComponent } from './sidebarcss/sidebarcss.component';
import { SidebarhtmlComponent } from './sidebarhtml/sidebarhtml.component';
import { SidebarjsComponent } from './sidebarjs/sidebarjs.component';


const routes:Routes = [
  {path:'', redirectTo:'html', pathMatch:'full'},
  {path:'html', component: SidebarhtmlComponent, children:[

  {path:'aboutus', component:AboutusComponent},
  {path:'article', component:ArticleComponent},
  {path:'contactus', component:ContactusComponent},
  {path:'home',component:HomeComponent},
  {path:'hrlist',component:HrlistComponent},
  {path:'loginform',component:LoginformComponent},
  {path:'menu',component:MenuComponent},
  {path:'reportcard',component:ReportcardComponent},
  {path:'employeedetails',component:EmployeedetailsComponent}

  ]},
  {path:'css', component:SidebarcssComponent, children:[

    {path:'day4practice',component:Day4practiceComponent},
    {path:'day4resume', component:Day4resumeComponent},
    {path:'position', component:PositionComponent},
    {path:'overflow', component:OverflowComponent},
    {path:'layoutpractice', component:LayoutpracticeComponent},
    {path:'layout', component:LayoutComponent},
    {path:'flex', component:FlexComponent},
    {path:'flexexample', component:FlexexampleComponent},
    {path:'gallery', component:GalleryComponent},
    {path:'menulist', component:MenulistComponent},
    {path:'mediademo', component:MediademoComponent},
    {path:'medialayout', component:MedialayoutComponent},
    {path:'grid', component:GridComponent},
    {path:'gridlayout', component:GridlayoutComponent}


  ]},
  {path:'js',component:SidebarjsComponent, children:[
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

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
