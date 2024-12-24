import React from 'react'
import Counter from './Counter'
import { useSelector } from 'react-redux'
import List from './List'

function Home() {
    const pokemonList = useSelector(state => state.pokemon.pokemonList)
    return (
        <>
            {pokemonList.length === 0 ? <Counter /> : <List pokemonList={pokemonList} />}
        </>
    )
}

export default Home
