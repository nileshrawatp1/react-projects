import React from 'react'
import { removePokemon } from "../redux/slices"
import { useDispatch, useSelector } from "react-redux"
import { selectPokemonList} from "../redux/selectors"

function List() {
    const dispatch = useDispatch();
    const pokemonList = useSelector(selectPokemonList)

    const removeItem = (itemsKey) => {
        dispatch(removePokemon(itemsKey))
    }

    return (
        <>
            <ul className='list-ul'>
                {
                    pokemonList.map((pokemon, i) => (
                        <li key={`${pokemon.name}-${i}`} className='list-item'>
                            {pokemon.name}
                            <button className='remove-btn' onClick={(e) => removeItem(`${pokemon.name}-${i}`)}>x</button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default List
