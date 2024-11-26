import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { AboutComponent } from "./components/about/about.component";
import { HeroeInfoComponent } from './components/heroe-info/heroe-info.component';
import { BuscadorComponent } from "./components/buscador/buscador.component";



const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    { path: 'heroes', component: HeroesComponent},
    { path: 'heroeInfo/:id', component: HeroeInfoComponent},
    { path: 'buscador/:valor', component: BuscadorComponent},
    { path: '**', pathMatch: 'full',redirectTo:'home'}
];

export const app_routing = RouterModule.forRoot(APP_ROUTES);