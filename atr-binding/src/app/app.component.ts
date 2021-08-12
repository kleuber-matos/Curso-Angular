import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  actionName = 'Go for it';
  isSpecial = true;
  canSave = true;
  classExpr = 'special clearance';
  classExpr2 = 'special clearance2';
  styleExpr = 'color: red';
  color = 'blue';
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/