import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';
import { PokemonService } from '../../services/pokemon.service';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

    pokePager: number = 12;

    pokeList: Pokemon[] = new Array();

    constructor(
        private pokemonService: PokemonService
    ) { }
        
    ngOnInit(): void {
        this.buildPokeList(1, this.pokePager)
            .subscribe(res => {
                // this.pokeSort();
            });
    }

    getPokemonById(id: number): Observable<Pokemon> {
        return this.pokemonService.getPokemonById(id);
    }

    buildPokeList(start: number, end: number): Observable<boolean> {
        return new Observable<boolean>(observer => {
            const observables = new Array<Observable<Pokemon>>();
            
            for (let index = start; index <= end; index++) {
                observables.push(this.getPokemonById(index));                
            }            
    
            forkJoin(observables)
            .subscribe(res => {
                this.pokeList.push(...res);
                
                observer.next(true);
                observer.complete();
            });
        });
    }    

    pokeSort(): void {
        this.pokeList.sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
    }
    
    pokeLoadMore(): void {        
        let start = this.pokeList.length + 1;
        let end = this.pokeList.length + this.pokePager;

        this.buildPokeList(start, end).subscribe(() => {});
    }

}
