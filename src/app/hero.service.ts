import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './models/hero';
import { HEROES } from './mock-heroes';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MessageService
  ) { }

  getHeroes(): Observable<Hero[]> { // declaring acync method witch would observe changes
    this.messageService.add('HeroService: fetched heroes')
    return of(HEROES);            // of directly HEROES data
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
