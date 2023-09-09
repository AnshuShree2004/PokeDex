import './PokemonList.css';
import axios from 'axios';
import Pokemon from '../Pokemon/Pokemon';
import { useEffect, useState } from 'react';

function PokemonList() {
  const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon";

  const [pokemonListState, setPokemonListState] = useState({
    pokemonList: [],
    pokedexUrl: DEFAULT_URL,
    nextUrl: DEFAULT_URL,
    prevUrl: DEFAULT_URL
  });

  async function downloadPokemons() {
    try {
      const response = await axios.get(pokemonListState.pokedexUrl);
      const pokemonResults = response.data.results;

      const pokemonPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));
      const pokemonListData = await axios.all(pokemonPromise);

      const pokemonFinalList = pokemonListData.map((pokemonData) => ({
        id: pokemonData.data.id,
        name: pokemonData.data.name,
        image: pokemonData.data.sprites.other.dream_world.front_default,
        types: pokemonData.data.types
      }));

      setPokemonListState({
        ...pokemonListState,
        pokemonList: pokemonFinalList,
        nextUrl: response.data.next,
        prevUrl: response.data.previous
      });
    } catch (error) {
      console.error("Error downloading Pokemon:", error);
    }
  }

  useEffect(() => {
    downloadPokemons();
  }, [pokemonListState.pokedexUrl]);

  return (
    <div className='pokemon-list-wrapper'>
      <h2>Pokemon List</h2>
      <div className="page-controls">
        <button onClick={() => setPokemonListState({ ...pokemonListState, pokedexUrl: pokemonListState.prevUrl })}>Previous</button>
        <button onClick={() => setPokemonListState({ ...pokemonListState, pokedexUrl: pokemonListState.nextUrl })}>Next</button>
      </div>
      <div className='pokemon-list'>
        {pokemonListState.pokemonList.map((pokemon) => (
          <Pokemon name={pokemon.name} url={pokemon.image} key={pokemon.id} id={pokemon.id} />
        ))}
      </div>
    </div>
  );
}

export default PokemonList;
