import { Component } from '@angular/core';
import pokemonsData from "./pokemons.json";
import { Pokemon } from './pokemon-class';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Pokemons';
  pokemonList: Pokemon[];
  
  constructor(){
    this.pokemonList = [];
    for(let element of pokemonsData){
      let pokemon: Pokemon = new Pokemon(element);
      this.pokemonList.push(pokemon);
    }
    console.log(this.pokemonList);  
  }

}
