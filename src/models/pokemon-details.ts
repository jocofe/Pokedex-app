export interface PokemonDetails {
    name: string;
    height: number;
    id: number;
    weight: number;
    abilities: string[];
    images: {
        maleImageUrl: string;
        maleShinyImageUrl: string;
        fameleImageUrl: string;
        fameleShinyImageUrl: string;
    }
  }
  
  export interface NamedApiResource {
    url: string;
    name: string;
  }

  export interface PokemonDetailsAbilitiesFromApi {
    is_hidden: boolean;
    slot: number;
    abilty: NamedApiResource;
  }
  export interface PokemonDetailsFromApi {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    weight: number;
    abilities: PokemonDetailsAbilitiesFromApi;
    sprites: {
        front_default: string;
        front_shiny: string;
        front_female: string;
        front_shiny_female: string;
    }
  }