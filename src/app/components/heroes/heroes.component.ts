import { Component, OnInit } from "@angular/core";
import { Hero } from '../../models/hero';
import { HeroService } from '../../hero.service';

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.scss"]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  
  constructor(
    private heroService: HeroService
  ) {}

  ngOnInit() {
    this.getHeroes(); 
  }

  getHeroes(): void {
    this.heroService.getHeroes()  // call async method from service
        .subscribe(              //  subscribe on changes
          heroes =>             //   get heroes data
          this.heroes = heroes //    assign data in the field of this class 
        )
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
