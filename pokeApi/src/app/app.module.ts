import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokesearchComponent } from './pokesearch/pokesearch.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { ItemPokemonComponent } from './item-pokemon/item-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    PokesearchComponent,
    PokemonComponent,
    ItemPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
