
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService} from 'src/app/servicios/heroes.service';



@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})

export class BuscadorComponent {

  constructor(private activatedRoute: ActivatedRoute,
              private _heroeService: HeroesService,
              private router: Router){

  }

  heroes: any[] = [];
  termino:string = '';

  ngOnInit() {
   this.activatedRoute.params.subscribe( params =>{
    this.termino = params['valor'];
    this.heroes = this._heroeService.buscarHeroes( params[ 'valor'] )
    console.log( this.heroes );
   })
  }

  infoHeroe( idx: number){
    this.router.navigate(['/heroeInfo', idx ]);
  }

}
