import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { PokemonDetailsFromApi, PokemonDetails as PokemonDetailsModel } from './models';

const mapPokemonDetailsFromApiToPokemonDetails = (dataFromApi: PokemonDetailsFromApi): PokemonDetailsModel => {
  const {abilities, height, id, name, sprites, weight} = dataFromApi;

  return {
    height,
    id,
    weight,
    name,
    abilities: abilities.map((abilityFromApi) => {
      return abilityFromApi.ability.name;
    }),
    images: {
      fameleImageUrl: sprites.front_female,
      maleImageUrl: sprites.front_default,
      fameleShinyImageUrl: sprites.front_shiny_female,
      maleShinyImageUrl: sprites.front_shiny,
    }
  }
};

export const PokemonDetails = () => {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetailsModel >();
  
  useEffect(() => {
    const fetchDetails = async () => {
      const response = await axios.get<PokemonDetailsFromApi>(`https://pokeapi.co/api/v2/ability/${pokemonId}/`);
      const mappedDetails = mapPokemonDetails
    };

    fetchDetails();
  }, []);

  const { pokemonId } = useParams();
  
  return (
    <div>
      <p>Nombre: {pokemonDetails?.name}</p>
      <p>Altura: {pokemonDetails?.height}</p>
      <p>Peso: {pokemonDetails?.weight}</p>
    </div>
  ) 
    
};


