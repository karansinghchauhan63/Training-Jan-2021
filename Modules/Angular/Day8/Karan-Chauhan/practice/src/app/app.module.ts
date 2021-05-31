import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgifexampleComponent } from './ngifexample/ngifexample.component';
import { FormsModule } from '@angular/forms';
import { NgforexampleComponent } from './ngforexample/ngforexample.component';
import { StyleexampleComponent } from './styleexample/styleexample.component';
@NgModule({
  declarations: [
    AppComponent,
    NgifexampleComponent,
    NgforexampleComponent,
    StyleexampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
