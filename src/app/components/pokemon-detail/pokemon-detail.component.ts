import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonSpeciesService } from 'src/app/services/pokemon-species.service';
import { PokemonSpecies } from 'src/app/interfaces/pokemon-species';
import { switchMap } from 'rxjs/operators'
import { FlavorText } from 'src/app/interfaces/flavor-text';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
    
    pokemonSpecies: PokemonSpecies;
    filterArgs = 
    {
        language: 'en',
        version: 'alpha-sapphire'
    };

    constructor(
        private route: ActivatedRoute,
        private pokemonSpeciesService: PokemonSpeciesService
    ) { }
    
    getPokemonSpecies(): Observable<boolean> {
        return new Observable<boolean>(observer => {
            const id = +this.route.snapshot.paramMap.get('id');
            this.pokemonSpeciesService.getPokemonSpeciesById(id)
                .subscribe(result => { 
                    this.pokemonSpecies = result;  
                    this.pokemonSpecies.flavor_text_entries = 
                        this.pokemonSpecies.flavor_text_entries.filter((item) => 
                            //TODO: Use .search(regex) instead of .indexOf
                                // 'red' returns both 'red' and 'firered'
                            //TODO: Split this into it's own method for readability?
                            item.language.name.indexOf(this.filterArgs.language) !== -1 &&
                            item.version.name.indexOf(this.filterArgs.version) !== -1
                        )        
                });
        })
    }

    ngOnInit(): void {
        this.getPokemonSpecies()
            .subscribe(res => {
                //TODO: Why doesn't this hit?
                console.log(res);
            });
    }

}
