import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobilesComponent } from './Products/mobiles/mobiles.component';
import { MenComponent } from './Products/men/men.component';
import { WomenComponent } from './Products/women/women.component';
import { HomeComponent } from './Products/home/home.component';
import { AppliancesComponent } from './Products/appliances/appliances.component';
import { SportsComponent } from './Products/sports/sports.component';
import { EssentialsComponent } from './Products/essentials/essentials.component';
import { OffersComponent } from './Products/offers/offers.component';
import { GlobalComponent } from './Products/global/global.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BuyingComponent } from './buying/buying.component';
import { MyordersComponent } from './myorders/myorders.component';

@NgModule({
  declarations: [
    AppComponent,
    MobilesComponent,
    MenComponent,
    WomenComponent,
    HomeComponent,
    AppliancesComponent,
    SportsComponent,
    EssentialsComponent,
    OffersComponent,
    GlobalComponent,
    BuyingComponent,
    MyordersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
