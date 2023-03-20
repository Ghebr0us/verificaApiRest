import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonService } from '../pokemon.service';
@Component({
  selector: 'app-pokesearch',
  templateUrl: './pokesearch.component.html',
  styleUrls: ['./pokesearch.component.css']
})
export class PokesearchComponent implements OnInit {

  data!: string;
  query!: string;
  obsPokemon!: Observable<Object>;
  results: any;
  constructor(private poke: PokemonService) { }

  ngOnInit(): void {
  }

  submit(query: HTMLInputElement): void {

    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsPokemon = this.poke.searchPokemon(this.query);
    this.obsPokemon.subscribe((data) => { this.results = data; console.log(this.results.name) });
   
  }
  }