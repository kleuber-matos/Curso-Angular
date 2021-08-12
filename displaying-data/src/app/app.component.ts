import { Component } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'app-root',

  /*
  * The template is a multi-line string within 
  * ECMAScript 2015 backticks (`). 
  * The backtick (`)—which is not the same character 
  * as a single quote (')—allows you to compose a 
  * string over several lines, which makes the HTML 
  * more readable.
  * The template displays the two component properties 
  * using double curly brace interpolation
  */

  template: `
    <h1>{{title}}</h1>
    <h4>My favorite hero is: {{myHero.name}}</h4>
    <h3>
    <p>Heroes:</p>
    <ul>
      <li *ngFor="let hero of heroes">
        {{ hero.name }}
      </li>
    </ul>
    </h3>
  `
})
export class AppComponent {
  title = 'Tour of Heroes';
  // myHero = 'Windstorm';
  // heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ];
  myHero = this.heroes[0];

}