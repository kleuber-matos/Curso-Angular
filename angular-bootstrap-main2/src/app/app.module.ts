import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
  imports:      [ BrowserModule, FormsModule, CollapseModule.forRoot(), BsDropdownModule.forRoot() ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
