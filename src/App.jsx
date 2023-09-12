
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Pokedex from './components/Pokedex/Pokedex'
import PokemonDetails from './components/PokemonDetails/PokemonDetails'
import ErrorPage from './components/ErrorPage/ErrorPage'

function App() {
  

  return (
  
     <Routes >

     <Route path="/" element={<Pokedex />}/>
     <Route path="/pokemon/:id" element={<PokemonDetails />}/>
     <Route path="*" element={<div>
      <h1> Not Found</h1>
    
     </div>} />
    
  

     </Routes>
    
  )
}

export default App
