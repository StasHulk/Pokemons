import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPokemon } from 'src/data-storage/pokemon-interface';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  @Input("pokemon") pokemonProps: IPokemon;
  @Input("id") pokemonID: number;
  classList: string[];

  constructor(private router: Router) {
    this.pokemonProps = {} as IPokemon;
    this.classList = ["pokemon"];
    this.pokemonID = 0;
  }

  ngOnInit(): void {
    this.classList.push(this.pokemonProps.type)
  }

  navigateToInfo(){
    this.router.navigate(["/pokemonInfo", this.pokemonID]);
  }

}
