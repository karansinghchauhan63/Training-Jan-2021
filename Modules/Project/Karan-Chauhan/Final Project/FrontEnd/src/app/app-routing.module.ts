import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyingComponent } from './buying/buying.component';
import { MyordersComponent } from './myorders/myorders.component';
import { AppliancesComponent } from './Products/appliances/appliances.component';
import { EssentialsComponent } from './Products/essentials/essentials.component';
import { GlobalComponent } from './Products/global/global.component';
import { HomeComponent } from './Products/home/home.component';
import { MenComponent } from './Products/men/men.component';
import { MobilesComponent } from './Products/mobiles/mobiles.component';
import { OffersComponent } from './Products/offers/offers.component';
import { SportsComponent } from './Products/sports/sports.component';
import { WomenComponent } from './Products/women/women.component';

const routes: Routes = [
 // {path:'', redirectTo:'Mobiles', pathMatch:'full'},
  {path:'mobiles', component: MobilesComponent}, 
  {path:'men', component: MenComponent},
  {path:'appliances', component:AppliancesComponent},
  {path:'essentials', component:EssentialsComponent},
  {path:'global', component:GlobalComponent},
  {path:'home', component:HomeComponent},
  {path:'offers', component:OffersComponent},
  {path:'sports', component:SportsComponent},
  {path:'women', component:WomenComponent},
  {path:'buying', component: BuyingComponent},
  {path:'myorders', component:MyordersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
