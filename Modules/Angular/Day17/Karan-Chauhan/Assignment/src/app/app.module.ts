import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SidebarHtmlComponent } from './HTML/sidebar-html/sidebar-html.component';
import { AboutusComponent } from './HTML/aboutus/aboutus.component';
import { ArticleComponent } from './HTML/article/article.component';
import { ContactusComponent } from './HTML/contactus/contactus.component';
import { HomeComponent } from './HTML/home/home.component';
import { HrlistComponent } from './HTML/hrlist/hrlist.component';
import { LoginformComponent } from './HTML/loginform/loginform.component';
import { MenuComponent } from './HTML/menu/menu.component';
import { ReportcardComponent } from './HTML/reportcard/reportcard.component';
import { EmployeedetailsComponent } from './HTML/employeedetails/employeedetails.component';
import { Day4practiceComponent } from './CSS/day4practice/day4practice.component';
import { Day4resumeComponent } from './CSS/day4resume/day4resume.component';
import { PositionComponent } from './CSS/position/position.component';
import { OverflowComponent } from './CSS/overflow/overflow.component';
import { LayoutpracticeComponent } from './CSS/layoutpractice/layoutpractice.component';
import { LayoutComponent } from './CSS/layout/layout.component';
import { FlexComponent } from './CSS/flex/flex.component';
import { FlexexampleComponent } from './CSS/flexexample/flexexample.component';
import { GalleryComponent } from './CSS/gallery/gallery.component';
import { MenulistComponent } from './CSS/menulist/menulist.component';
import { MediademoComponent } from './CSS/mediademo/mediademo.component';
import { MedialayoutComponent } from './CSS/medialayout/medialayout.component';
import { GridComponent } from './CSS/grid/grid.component';
import { GridlayoutComponent } from './CSS/gridlayout/gridlayout.component';
import { ArrayComponent } from './JS/array/array.component';
import { Day15practiceComponent } from './JS/day15practice/day15practice.component';
import { Day16practiceComponent } from './JS/day16practice/day16practice.component';
import { Day17practiceComponent } from './JS/day17practice/day17practice.component';
import { Day18practiceComponent } from './JS/day18practice/day18practice.component';
import { Day20practiceComponent } from './JS/day20practice/day20practice.component';
import { Day20assignmentComponent } from './JS/day20assignment/day20assignment.component';
import { Day19assignmentComponent } from './JS/day19assignment/day19assignment.component';
import { Day18assignmentComponent } from './JS/day18assignment/day18assignment.component';
import { Day17assignmentComponent } from './JS/day17assignment/day17assignment.component';
import { Day16assignmentComponent } from './JS/day16assignment/day16assignment.component';
import { Day15assignmentComponent } from './JS/day15assignment/day15assignment.component';
import { SidebarJsComponent } from './JS/sidebar-js/sidebar-js.component';
import { SidebarCssComponent } from './CSS/sidebar-css/sidebar-css.component';
import { HtmlModuleModule } from './HTML/html-module/html-module.module';
import { CssModule } from './CSS/css/css.module';
import { JsModule } from './JS/js/js.module';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    SidebarHtmlComponent,
    AboutusComponent,
    ArticleComponent,
    ContactusComponent,
    HomeComponent,
    HrlistComponent,
    LoginformComponent,
    MenuComponent,
    ReportcardComponent,
    EmployeedetailsComponent,
    Day4practiceComponent,
    Day4resumeComponent,
    PositionComponent,
    OverflowComponent,
    LayoutpracticeComponent,
    LayoutComponent,
    FlexComponent,
    FlexexampleComponent,
    GalleryComponent,
    MenulistComponent,
    MediademoComponent,
    MedialayoutComponent,
    GridComponent,
    GridlayoutComponent,
    ArrayComponent,
    Day15practiceComponent,
    Day16practiceComponent,
    Day17practiceComponent,
    Day18practiceComponent,
    Day20practiceComponent,
    Day20assignmentComponent,
    Day19assignmentComponent,
    Day18assignmentComponent,
    Day17assignmentComponent,
    Day16assignmentComponent,
    Day15assignmentComponent,
    SidebarJsComponent,
    SidebarCssComponent
  ],
  imports: [
    BrowserModule,
    HtmlModuleModule,
    CssModule,
    JsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
