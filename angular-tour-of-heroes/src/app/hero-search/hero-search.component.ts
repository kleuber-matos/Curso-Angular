import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.css' ]
})
export class HeroSearchComponent implements OnInit {
  // Remember that the component class does not subscribe to the heroes$ observable. 
  // That's the job of the AsyncPipe in the template.
  heroes$: Observable<Hero[]>;


  // A Subject is both a source of observable values and an Observable itself. 
  // You can subscribe to a Subject as you would any Observable.
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}


  // You can also push values into that Observable by calling its next(value) 
  // method as the search() method does
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      // waits until the flow of new string events pauses for 300 
      // milliseconds before passing along the latest string. 
      // You'll never make requests more frequently than 300ms.
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      // preserves the original request order while returning only the observable 
      // from the most recent HTTP method call. Results from prior calls are 
      // canceled and discarded.
      // Note that canceling a previous searchHeroes() Observable doesn't actually 
      // abort a pending HTTP request. Unwanted results are simply discarded before 
      // they reach your application code.
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }
}