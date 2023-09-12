
import { useState } from 'react'
import PokemonList from '../PokemonList/PokemonList'
import Search from '../Search/Search'
import './Pokedex.css'
import PokemonDetails from '../PokemonDetails/PokemonDetails'

function Pokedex() {

    const [searchTerm, setSearchTerm] = useState('')

return (
    <div className='pokedex-wrapper'>
       
<div className='logo'>POKEDEX</div>
<Search  updateSearchTerm = {setSearchTerm}/>
{searchTerm ? <PokemonDetails pokemonName={searchTerm} /> : <PokemonList />}
<PokemonList />



    </div>
)
}

export default Pokedex