import { Component } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentItem = { name: 'teapot'} ;
  clickMessage = '';

  onSave(event?: KeyboardEvent) {
    const evtMsg = event ? ' Event target is ' + (event.target as HTMLElement).textContent : '';
    alert('Saved.' + evtMsg);
    if (event) { event.stopPropagation(); }
  }

  onSave2(event?: KeyboardEvent) {
    const evtMsg = event ? ' Event target is ' + (event.target as HTMLElement).textContent : '';
    alert('Saved2.' + evtMsg);
    if (event) { event.stopPropagation(); }
  }

  deleteItem(item: Item) {
    alert(`Delete the ${item.name}.`);
  }

  onClickMe(event?: KeyboardEvent) {
    const evtMsg = event ? ' Event target class is ' + (event.target as HTMLElement).className  : '';
    alert('Click me.' + evtMsg);
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/