import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { ArticleComponent } from '../article/article.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { EmployeedetailsComponent } from '../employeedetails/employeedetails.component';
import { HomeComponent } from '../home/home.component';
import { HrlistComponent } from '../hrlist/hrlist.component';
import { LoginformComponent } from '../loginform/loginform.component';
import { MenuComponent } from '../menu/menu.component';
import { ReportcardComponent } from '../reportcard/reportcard.component';
import { SidebarHtmlComponent } from '../sidebar-html/sidebar-html.component';

const routes:Routes = [
  {path:'', redirectTo:'html', pathMatch:'full'},
  {path:'html', component: SidebarHtmlComponent, children:[

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
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HtmlModuleRoutingModule { }
