import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { CrisisCenterComponent } from './crisis/crisis-center/crisis-center.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HeroesModule } from './heroes/heroes.module';
import { CrisisListComponent } from './crisis/crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis/crisis-detail/crisis-detail.component';
import { CrisisCenterHomeComponent } from './crisis/crisis-center-home/crisis-center-home.component';
import { CrisisModule } from './crisis/crisis/crisis.module';
import { ComposeMessageComponent } from './crisis/compose-message/compose-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroDetailComponent,
    CrisisCenterComponent,
    PagenotfoundComponent,
    CrisisListComponent,
    CrisisDetailComponent,
    CrisisCenterHomeComponent,
    ComposeMessageComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    CrisisModule,
    FormsModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
