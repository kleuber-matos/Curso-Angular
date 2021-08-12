import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
// import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // selectedHero: Hero;

  heroes: Hero[];

  // The parameter simultaneously defines a private heroService property and identifies 
  // it as a HeroService injection site.
  // When Angular creates a HeroesComponent, the Dependency Injection system sets the 
  // heroService parameter to the singleton instance of HeroService.
 
  // constructor(private heroService: HeroService, private messageService: MessageService) { }
  constructor(private heroService: HeroService) { }
  /*
  While you could call getHeroes() in the constructor, that's not the best practice.

  Reserve the constructor for simple initialization such as wiring constructor parameters 
  to properties. The constructor shouldn't do anything. It certainly shouldn't call a function 
  that makes HTTP requests to a remote server as a real data service would.

  Instead, call getHeroes() inside the ngOnInit lifecycle hook and let Angular call ngOnInit() 
  at an appropriate time after constructing a HeroesComponent instance.
  */
  ngOnInit() {
    this.getHeroes();
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }

  /*
  The HeroService must wait for the server to respond, getHeroes() cannot return immediately with 
  hero data, and the browser will not block while the service waits.

  HeroService.getHeroes() must have an asynchronous signature of some kind.

  In this tutorial, HeroService.getHeroes() will return an Observable because it will eventually 
  use the Angular HttpClient.get method to fetch the heroes and HttpClient.get() returns an Observable.
  */
  /*
  Observable.subscribe() is the critical difference.

  The previous version assigns an array of heroes to the component's heroes property. The assignment 
  occurs synchronously, as if the server could return heroes instantly or the browser could freeze 
  the UI while it waited for the server's response.

  That won't work when the HeroService is actually making requests of a remote server.

  The new version waits for the Observable to emit the array of heroes—which could happen now or several 
  minutes from now. The subscribe() method passes the emitted array to the callback, which sets the 
  component's heroes property.

  This asynchronous approach will work when the HeroService requests heroes from the server.
  */
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  /*
  * To add a hero, this app only needs the hero's name. You can use an <input> element paired with 
  * an add button.
  * In response to a click event, call the component's click handler, add(), and then clear the 
  * input field so that it's ready for another name.
  * 
  * When the given name is non-blank, the handler creates a Hero-like object from the name 
  * (it's only missing the id) and passes it to the services addHero() method.
  * 
  * When addHero() saves successfully, the subscribe() callback receives the new hero and pushes it 
  * into to the heroes list for display.
  */
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  /*Although the component delegates hero deletion to the HeroService, it remains responsible for 
  * updating its own list of heroes. The component's delete() method immediately removes the 
  * hero-to-delete from that list, anticipating that the HeroService will succeed on the server.
  * 
  * There's really nothing for the component to do with the Observable returned by heroService.delete() 
  * but it must subscribe anyway.
  * 
  * If you neglect to subscribe(), the service will not send the delete request to the server. 
  * As a rule, an Observable does nothing until something subscribes.
  * 
  * Confirm this for yourself by temporarily removing the subscribe(), clicking "Dashboard", then 
  * clicking "Heroes". You'll see the full list of heroes again.
  */
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}