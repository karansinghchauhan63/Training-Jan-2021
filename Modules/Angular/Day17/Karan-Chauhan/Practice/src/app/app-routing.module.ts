import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComposeMessageComponent } from './crisis/compose-message/compose-message.component';
import { CrisisCenterComponent } from './crisis/crisis-center/crisis-center.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'',redirectTo:'hero-list', pathMatch:'full'},
 //ng g {path:'crisis-center',component:CrisisCenterComponent},
  {path:'**', component:PagenotfoundComponent},
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
