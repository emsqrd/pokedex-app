import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

    pokeUrl = 'https://pokeapi.co/api/v2/pokemon';

    constructor(
        private http: HttpClient
    ) { }

    getPokemon(): Observable<Pokemon> {
        return this.http.get<Pokemon>(this.pokeUrl);
    }   

    getPokemonById(id: number): Observable<Pokemon> {
        const url = `${this.pokeUrl}/${id}`;

        return this.http.get<Pokemon>(url);
    }

}