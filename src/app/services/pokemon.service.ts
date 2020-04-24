import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

    pokeBaseUrl = 'https://pokeapi.co/api/v2';

    constructor(
        private http: HttpClient
    ) { }

    getPokemon(): Observable<Pokemon> {
        const url = this.pokeBaseUrl;
        console.log(url);
        return this.http.get<Pokemon>(url);
    }   

    getPokemonById(id: number): Observable<Pokemon> {
        const url = `${this.pokeBaseUrl}/pokemon/${id}`;
        return this.http.get<Pokemon>(url);
    }

}