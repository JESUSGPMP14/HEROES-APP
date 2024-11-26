import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService, Heroe  } from './../../servicios/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',

})
export class HeroesComponent implements OnInit {

  constructor( private _heroesService: HeroesService,
               private router:Router ){
  }

  heroes:Heroe[] = [];

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

  infoHeroe( idx: number){
    this.router.navigate(['/heroeInfo', idx ]);
  }

}
