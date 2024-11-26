import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//rutas
import { app_routing } from './app.routes';

//servicios
import {HeroesService} from './servicios/heroes.service';


//componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/compartidos/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeInfoComponent } from './components/heroe-info/heroe-info.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeInfoComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    FormsModule
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
