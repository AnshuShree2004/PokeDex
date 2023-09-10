import "./PokemonList.css";
import Pokemon from "../Pokemon/Pokemon";
import usePokemonList from "../../hooks/usePokemonList";

function PokemonList() {
  const [pokemonListState, setPokemonListState] = usePokemonList();
  return (
    <div className="pokemon-list-wrapper">
      <h2>Pokemon List</h2>
      <div className="page-controls">
        <button
          onClick={() =>
            setPokemonListState({
              ...pokemonListState,
              pokedexUrl: pokemonListState.prevUrl,
            })
          }
        >
          Previous
        </button>
        <button
          onClick={() =>
            setPokemonListState({
              ...pokemonListState,
              pokedexUrl: pokemonListState.nextUrl,
            })
          }
        >
          Next
        </button>
      </div>
      <div className="pokemon-list">
        {pokemonListState.pokemonList.map((pokemon) => (
          <Pokemon
            name={pokemon.name}
            url={pokemon.image}
            key={pokemon.id}
            id={pokemon.id}
          />
        ))}
      </div>
    </div>
  );
}

export default PokemonList;
