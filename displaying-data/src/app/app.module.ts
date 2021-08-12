import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


/*
* Notice that you don't call new to create an instance of the 
* AppComponent class. Angular is creating an instance for you. How?
*
* The CSS selector in the @Component decorator specifies an element 
* named <app-root>. That element is a placeholder in the body of your 
* index.html file.
* When you bootstrap with the AppComponent class (in main.ts), 
* Angular looks for a <app-root> in the index.html, finds it, 
* instantiates an instance of AppComponent, and renders it inside 
* the <app-root> tag.
*/
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
