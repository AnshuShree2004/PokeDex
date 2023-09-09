import { useEffect, useState } from 'react'
import './PokemonDetails.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

function PokemonDetails() {
    const { id } = useParams()
    const POKEMON_DETAILS_URL = `https://pokeapi.co/api/v2/pokemon/${id}` // Template literal to include id in URL

    const [pokemon, setPokemon] = useState(null)

    async function downloadPokemon() {
        try {
            const response = await axios.get(POKEMON_DETAILS_URL)
            const pokemonData = response.data

            setPokemon({
                name: pokemonData.name,
                height: pokemonData.height,
                weight: pokemonData.weight,
                types: pokemonData.types,
                image: pokemonData.sprites.other.dream_world.front_default,
            })
        } catch (error) {
            console.error('Error fetching Pokemon details:', error)
        }
    }

    useEffect(() => {
        downloadPokemon()
    }, [id]) // Added 'id' as a dependency to the useEffect so it fetches data when 'id' changes

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
                        <h1> Type:</h1>
                        {pokemon.types.map(t => (
                            <span key={t.type.name} className='type'>
                                {t.type.name}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default PokemonDetails
