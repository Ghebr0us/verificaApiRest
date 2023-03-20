import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class PokemonService {
    constructor(private http: HttpClient) { }

    searchPokemon(query: string){
        const url = `https://pokeapi.co/api/v2/pokemon/${query}`
        return this.http.get(url)
    }

    getPokemon(id: string){
        const url = ` https://pokeapi.co/api/v2/pokemon/${id}`;
  
        return this.http.get(url);
    }
}