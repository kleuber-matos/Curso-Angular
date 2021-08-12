import { Injectable } from '@angular/core';

// In a later tutorial on HTTP, you'll learn that Angular's HttpClient methods return 
// RxJS Observables. In this tutorial, you'll simulate getting data from the server 
// with the RxJS of() function.
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

/* 
You must make the HeroService available to the dependency injection 
system before Angular can inject it into the HeroesComponent by registering 
a provider. 

A provider is something that can create or deliver a service; in this case, 
it instantiates the HeroService class to provide the service.

To make sure that the HeroService can provide this service, register it with 
the injector, which is the object that is responsible for choosing and injecting 
the provider where the app requires it.

By default, the Angular CLI command ng generate service registers a provider with 
the root injector for your service by including provider metadata, 
that is providedIn: 'root' in the @Injectable() decorator.
*/
/*
When you provide the service at the root level, Angular creates a single, shared 
instance of HeroService and injects into any class that asks for it. Registering 
the provider in the @Injectable metadata also allows Angular to optimize an app 
by removing the service if it turns out not to be used after all.
*/
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  /*
  This is a typical "service-in-service" scenario: you inject the MessageService 
  into the HeroService which is injected into the HeroesComponent.
  */
 constructor(
  private http: HttpClient,
  private messageService: MessageService) { }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 * 
 * The following handleError() will be shared by many HeroService methods 
 * so it's generalized to meet their different needs.
 *
 * Instead of handling the error directly, it returns an error handler 
 * function to catchError that it has configured with both the name 
 * of the operation that failed and a safe return value.
 *
 * After reporting the error to the console, the handler constructs a user 
 * friendly message and returns a safe value to the app so the app can 
 * keep working.
 * 
 * Because each service method returns a different kind of Observable result, 
 * handleError() takes a type parameter so it can return the safe value as 
 * the type that the app expects.
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
  
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    // return of(HEROES);
    return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
      /*
      The catchError() operator intercepts an Observable that failed. 
      It passes the error an error handler that can do what it wants 
      with the error.
      
      The HeroService methods will tap into the flow of observable 
      values and send a message, via the log() method, to the message 
      area at the bottom of the page.

      They'll do that with the RxJS tap() operator, which looks at the 
      observable values, does something with those values, and passes 
      them along. The tap() call back doesn't touch the values themselves.
      */
      tap(_ => this.log('fetched heroes')),
      
      // The catchError() operator intercepts an Observable that failed. 
      // It passes the error an error handler that can do what it wants 
      // with the error.
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }

  /** GET hero by id. Will 404 if id not found 
   * Most web APIs support a get by id request in the form :baseURL/:id.
   * 
   * Here, the base URL is the heroesURL defined in the Heroes and HTTP section 
   * (api/heroes) and id is the number of the hero that you want to retrieve. 
   * For example, api/heroes/11.
   * 
   * There are three significant differences from getHeroes():
   * 
   * getHero() constructs a request URL with the desired hero's id.
   * The server should respond with a single hero rather than an array of heroes.
   * getHero() returns an Observable<Hero> ("an observable of Hero objects") rather 
   * than an observable of hero arrays .
  */
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;

    // TODO: send the message _after_ fetching the hero
    // Note the backticks ( ` ) that define a JavaScript template literal for embedding the id.
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    // return of(HEROES.find(hero => hero.id === id));
   
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );  
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  /** PUT: update the hero on the server 
   * The HttpClient.put() method takes three parameters:

  *  # the URL
  *  # the data to update (the modified hero in this case)
  *  # options
  * 
  * The URL is unchanged. 
  * The heroes web API knows which hero to update by looking at the hero's id.
  * The heroes web API expects a special header in HTTP save requests. 
  * That header is in the httpOptions constant defined in the HeroService.
  */

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /** POST: add a new hero to the server 
   * addHero() differs from updateHero() in two ways:
   * 
   * # It calls HttpClient.post() instead of put().
   * # It expects the server to generate an id for the new hero, which it 
   * returns in the Observable<Hero> to the caller.
  */
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  /** DELETE: delete the hero from the server 
   * Note the following key points:
   * 
   * # deleteHero() calls HttpClient.delete().
   * # The URL is the heroes resource URL plus the id of the hero to delete.
   * # You don't send data as you did with put() and post().
   * # You still send the httpOptions.
  */
  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found heroes matching "${term}"`) :
        this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }
}

