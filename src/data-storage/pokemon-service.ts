import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IPokemon } from "./pokemon-interface";

import pokemonsJSON from "./pokemons.json"

@Injectable()
export class PokemonService{
    pokemonList$: BehaviorSubject<IPokemon[]> = new BehaviorSubject<IPokemon[]>([]);

    constructor(){
        let initialPokemonList: IPokemon[] = pokemonsJSON;
        this.pokemonList$.next(initialPokemonList);
    }
}