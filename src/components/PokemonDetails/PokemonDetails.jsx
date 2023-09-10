
import usePokemon from '../../hooks/usePokemon'
import './PokemonDetails.css'
import { Link, useParams } from 'react-router-dom'


function PokemonDetails() {
    const { id } = useParams()
    const [pokemon] = usePokemon(id)
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
