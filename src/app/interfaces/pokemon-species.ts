import { FlavorText } from './flavor-text';
import { NamedResource } from './named-resource';
import { ApiResource } from './api-resource';
import { Name } from './name';
import { PalparkEncounterArea } from './palpark-encounter-area';
import { Genus } from './genus';
import { PokemonSpeciesVariety } from './pokemon-species-variety';

export interface PokemonSpecies {
    id: number;
    name: string;
    order: number;
    gender_rate: number;
    capture_rate: number;
    base_happiness: number;
    is_baby: boolean;
    hatch_counter: number;
    has_gender_differences: boolean;
    forms_switchable: boolean;
    growth_rate: NamedResource;
    pokedex_numbers: boolean;
    egg_groups: boolean;
    color: NamedResource;
    shape: NamedResource;
    evolves_from_species: NamedResource;
    evolution_chain: ApiResource;
    habitat: NamedResource;
    generation: NamedResource;
    names: Name[];
    pal_park_encounters: PalparkEncounterArea[];
    flavor_text_entries: FlavorText[];
    genera: Genus[];
    varieties: PokemonSpeciesVariety[]
}
 