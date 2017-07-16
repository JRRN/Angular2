//Importa el componente angular core
import { Component, OnInit } from '@angular/core';

// Importa el Modelo
import { Hero } from './hero';
// Importa el servicio Heroe
import { HeroService } from './hero.service';


@Component({
  	selector: 'app-root',
    template: '<h1>{{title}}</h1><h2>My Heroes</h2><ul class="heroes"><li *ngFor="let hero of heroes"[class.selected]="hero === selectedHero" (click)="onSelect(hero)"><span class="badge">{{hero.id}}</span> {{hero.name}}</li></ul><hero-detail [hero]="selectedHero"></hero-detail>',
    styleUrls: ['./app.component.css'],
    providers: [HeroService]
})

export class AppComponent implements OnInit{
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }
  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}