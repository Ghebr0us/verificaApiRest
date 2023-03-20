import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokesearchComponent } from './pokesearch/pokesearch.component';
import { ItemPokemonComponent } from './item-pokemon/item-pokemon.component';
const routes: Routes = [
  { path: 'search', component: PokesearchComponent },
  { path: 'pokemon/:id', component: ItemPokemonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
