import Searcher from './components/Searcher';
import { Col } from 'antd';
import PokemonCard from './components/PokemonCard';
import PokemonList from './components/PokemonList';
import Logo from './statics/logo.svg';
import { connect } from 'react-redux';
import './App.css';
import { setPokemons as setPokemonsActions } from './actions';
import { useEffect, useState } from 'react';
import { getPokemons } from './api';
import { setPokemons } from './actions';

function App({pokemons, setPokemons }) {


  useEffect( () => {
    const fetchPokemons = async () => {
      const pokemonRes = await getPokemons();
      setPokemons(pokemonRes);
    }

    fetchPokemons();
  }, []);
  return (
    <div className="App">
      <Col span={8} offset={8}>
        <img src={Logo} alt="logo"></img>
      </Col>
      <Col span={8} offset={8}>
        <Searcher/></Col>
        <PokemonList pokemons={pokemons}/>
    </div>
  );
}

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value)) // se llama al disparador de redux y no directo
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
