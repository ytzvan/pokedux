import PokemonCard from "./PokemonCard";

const PokemonList = ( { pokemons} ) => {
    return (
        <div className="PokemonList">
            { pokemons.map( (pokemon) => {
                return <PokemonCard name={pokemon.name} />;
            }) 
            }
        </div>
    )
};

PokemonList.defaultProps = {
    pokemons: Array(10).fill(''), // arreglo de 10 posiciones en blanco
}

export default PokemonList;