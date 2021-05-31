import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Day4practiceComponent } from '../day4practice/day4practice.component';
import { Day4resumeComponent } from '../day4resume/day4resume.component';
import { FlexComponent } from '../flex/flex.component';
import { FlexexampleComponent } from '../flexexample/flexexample.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { GridComponent } from '../grid/grid.component';
import { GridlayoutComponent } from '../gridlayout/gridlayout.component';
import { LayoutComponent } from '../layout/layout.component';
import { LayoutpracticeComponent } from '../layoutpractice/layoutpractice.component';
import { MediademoComponent } from '../mediademo/mediademo.component';
import { MedialayoutComponent } from '../medialayout/medialayout.component';
import { MenulistComponent } from '../menulist/menulist.component';
import { OverflowComponent } from '../overflow/overflow.component';
import { PositionComponent } from '../position/position.component';
import { SidebarCssComponent } from '../sidebar-css/sidebar-css.component';

const routes: Routes = [
  {path:'css', component:SidebarCssComponent, children:[

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


  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CssRoutingModule { }
