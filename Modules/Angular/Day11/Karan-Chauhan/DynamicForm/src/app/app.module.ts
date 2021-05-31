import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { DynamicformComponent } from './dynamicform/dynamicform.component';


@NgModule({
  declarations: [
    AppComponent,
    DynamicComponent,
    DynamicformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
