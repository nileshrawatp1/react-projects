import React from 'react'
import Counter from './Counter'
import { useSelector } from "react-redux";
import { selectPokemonList } from "../redux/selectors"
import List from './List';

function Home() {
    const pokemonList = useSelector(selectPokemonList)
    return (
        <>
            {pokemonList.length > 0 ? <List /> : <Counter />}
        </>
    )
}

export default Home
