import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonService } from '../pokemon.service';
@Component({
  selector: 'app-item-pokemon',
  templateUrl: './item-pokemon.component.html',
  styleUrls: ['./item-pokemon.component.css']
})
export class ItemPokemonComponent implements OnInit{
  pokemon!: any;
  id: string | undefined = '';
  loading: boolean = true;
  abilities: Array<string> = [];
  results: any;
  constructor(
    private poke: PokemonService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id')?.toString();

      if (!this.id) this.router.navigate(['/']);
      else {
        this.poke.getPokemon(this.id).subscribe((data) => {
          this.pokemon = data;
          this.loading = false;

          this.abilities = this.pokemon.abilities.map((i: { text: any; }) => i.text);
        });
      }
    });
  }
}
