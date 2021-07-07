import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'pokemonCards',
    pathMatch: 'full'
  },
  {
    path: 'pokemonCards',
    component: LayoutComponent,
  },
  {
    path: 'pokemonInfo/:id',
    component: PokemonInfoComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
