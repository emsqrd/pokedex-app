import { PokemonType } from './pokemon-type';
import { PokemonSprite } from './pokemon-sprite';
import { PokemonSpecies } from './pokemon-species';

export interface Pokemon {
    id: number,
    name: string,
    base_experience: number,
    height: number,
    weight: number,
    types: PokemonType[],
    sprites: PokemonSprite,
    species: PokemonSpecies
}
