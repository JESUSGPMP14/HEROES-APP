import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from './../../servicios/heroes.service';


@Component({
  selector: 'app-heroe-info',
  templateUrl: './heroe-info.component.html',

})
export class HeroeInfoComponent {

  heroe:any = {};

  constructor( activatedRoute: ActivatedRoute, private _heroeService: HeroesService, private router: Router){

    activatedRoute.params.subscribe( params => {
      this.heroe = this._heroeService.getInfoHeroe( params['id']);
      console.log(this.heroe)
    })
  }

  volverHeroes(){
    this.router.navigate(['/heroes']);
  }

}
