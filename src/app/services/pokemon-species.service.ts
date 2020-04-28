import { Injectable } from '@angular/core';
import { PokemonSpecies } from '../interfaces/pokemon-species';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonSpeciesService {

    pokeBaseUrl = 'https://pokeapi.co/api/v2';

    constructor(
        private http: HttpClient
    ) { }
    
    getPokemonSpeciesById(id: number): Observable<PokemonSpecies> {
        const url = `${this.pokeBaseUrl}/pokemon-species/${id}`;
        return this.http.get<PokemonSpecies>(url);
    }
}
