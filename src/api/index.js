export const getPokemons = async () => {
    console.log("getting...")
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    const data = await response.text();
    const result = JSON.parse(data);
    //const pokemons = response.json();
    console.log("pokemons", result.results)
//    debugger
    return result.results;
} 

