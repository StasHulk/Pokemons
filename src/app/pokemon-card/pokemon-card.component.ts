import { Inject } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon-class';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: Pokemon;
  classList: string[];

  constructor() { 
    this.pokemon = new Pokemon({});
    this.classList = ["pokemon"];
  }

  ngOnInit(): void {
    this.classList.push(this.pokemon.type);
  }

  logPokemon(){
    console.log(this.pokemon);
  }

}
