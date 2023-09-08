import { useEffect, useState } from 'react'
import './PokemonList.css'
import axios from 'axios'
import Pokemon from '../Pokemon/Pokemon'

function PokemonList() {

    const [pokemonList, setPokemonList ] = useState([])

const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon"

  const [pokedexUrl, setPokedexUrl] = useState(DEFAULT_URL)

  const [ nextUrl, setNextUrl] = useState(DEFAULT_URL)

  const [ prevUrl, setPrevUrl] = useState(DEFAULT_URL)

   async function  downloadPokemons() {
     const response = await axios.get(pokedexUrl ? pokedexUrl : DEFAULT_URL)
     //console.log(response.data)

     const pokemonResults = response.data.results;// array of pokemons

    setNextUrl(response.data.next)

    setPrevUrl(response.data.previous)

     const pokemonPromise = pokemonResults.map((pokemon) => 
        axios.get(pokemon.url)
    )

     const pokemonListData = await axios.all(pokemonPromise)

   const pokemonFinalList = pokemonListData.map(pokemonData => {

    const pokemon = pokemonData.data

    return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other.dream_world.front_default,
        types: pokemon.types
    }
   })
  setPokemonList(pokemonFinalList)
   console.log(pokemonFinalList);
   }


   useEffect(() => {
  downloadPokemons()
   }, [pokedexUrl])

    return(
        <div className='pokemon-list-wrapper'>  

            <h2>Pokemon List</h2>
       <div className="page-controls">
          <button onClick={() => setPokedexUrl(prevUrl)}>Previous</button>
          <button onClick={() => setPokedexUrl(nextUrl)}>Next</button>
       </div>

        <div className='pokemon-list'>
        {
            pokemonList.map(pokemon => <Pokemon  name= {pokemon.name} url = {pokemon.image} key = {pokemon.id}/>)
        }
        </div>
        
        </div>
    )
}

export default PokemonList