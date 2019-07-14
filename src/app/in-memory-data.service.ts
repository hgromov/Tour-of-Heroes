import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './models/hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  
  constructor() { }

  createDb() {
    const heroes: Hero[] = [
      { id: 1, name: 'Yarik Shust' },
      { id: 2, name: 'Lil Peep' },
      { id: 3, name: 'Vladosik' },
      { id: 4, name: 'XXXTENTACION' },
      { id: 5, name: 'Poc. Killer' },
      { id: 6, name: 'Linard Skynard' },
      { id: 7, name: 'The Neighbourhood' },
      { id: 8, name: 'Ulik' },
      { id: 9, name: 'Graph. Goncharov' },
      { id: 10, name: 'Nirvana' },
      { id: 11, name: 'Vasya Hmuriy' },
      { id: 12, name: 'Ivan Ivanov' },
      { id: 13, name: 'Petr Petrov' },
      { id: 14, name: 'Grisha Grishko' },
      { id: 15, name: 'Stepa Oleynik' },
      { id: 16, name: 'Anna Zushik' },
      { id: 17, name: 'Anna Ulyanova' },
      { id: 18, name: 'Plushka' },
      { id: 19, name: 'Disha' },
      { id: 20, name: 'Pewdiepie' }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }
}
