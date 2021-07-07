import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IPokemon } from 'src/data-storage/pokemon-interface';
import { PokemonService } from 'src/data-storage/pokemon-service';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.scss']
})
export class PokemonInfoComponent implements OnInit {
  
  private subscription: Subscription;
  public pokemonID: number = 0;
  public pokemon: IPokemon = {} as IPokemon;
  public classList: string[] = [];

  constructor(private pokemonService: PokemonService, private activatedRoute: ActivatedRoute) {
    this.subscription = activatedRoute.params.subscribe(params => this.pokemonID = params['id']);
  }

  ngOnInit(): void {
    let pokemonList = this.pokemonService.pokemonList$.getValue();
    this.pokemon = pokemonList[this.pokemonID];
    this.classList = ["main", this.pokemon.type];
    console.log(this.pokemon);
  }
}
