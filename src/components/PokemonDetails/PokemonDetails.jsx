import './PokemonDetails.css'
import { Link, useParams } from 'react-router-dom'

// custom hooks
import usePokemon from '../../hooks/usePokemon'
import Pokemon from '../Pokemon/Pokemon'

function PokemonDetails({pokemonName}) {

   
    const [pokemon, pokemonListState] = usePokemon(pokemonName)

    



    return (
        <>
            <h1 className='pokemon-redirect-link'>
                <Link to="/">Pokedex</Link> {/* Added 'to' prop to Link */}
            </h1>
            {pokemon && (
                <div className='pokemon-details-wrapper'>
                    <div className='pokemon-details-name'>
                        {pokemon.name}
                    </div>
                    <div className='pokemon-image'>
                        <img src={pokemon.image} alt={pokemon.name} /> {/* Added 'alt' attribute */}
                    </div>
                    <div className='pokemon-attributes'>
                        <div>
                            Height: {pokemon.height}
                        </div>
                        <div>
                            Weight: {pokemon.weight}
                        </div>
                    </div>
                    <div className='pokemon-types'>
                        <h2 className='pokemon-type-h2'> Type:</h2>
                        {pokemon.types.map(t => (
                            <span key={t.type.name} className='type'>
                                {t.type.name}
                            </span>
                        ))}
                    </div>
                </div>
            )}
         <div className='similar-pokemons'>
         <h2>Similar Pokemons</h2>
         <div className="pokemon-similar-boxes">
         {pokemonListState.pokemonList.length  > 0 &&
             pokemonListState.pokemonList.map((pokemon) => (
                <Pokemon
                  name={pokemon.name}
                  url={pokemon.image}
                  key={pokemon.id}
                  id={pokemon.id}
                />
              ))
          }
         </div>
          
         </div>
            
        </>
    )
}

export default PokemonDetails
