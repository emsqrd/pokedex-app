import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { SortByPipe } from './sort-by.pipe';
import { FlavorTextFilter } from './pipes/pokefilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    AppHeaderComponent,
    AppFooterComponent,
    PokemonDetailComponent,
    SortByPipe,
    FlavorTextFilter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
