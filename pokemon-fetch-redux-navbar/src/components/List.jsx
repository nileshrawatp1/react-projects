import React from 'react'
import { useDispatch } from 'react-redux'
import { removePokemon } from '../redux/pokemonSlice';

function List({ data }) {
    const dispatch = useDispatch();

    const removepokemon = (item) => {
        dispatch(removePokemon(item))
    }
    return (
        <>
            <ul className='pokemon-list'>
                {data.map((pokemon, i) => (
                    <li
                        className='pokemon-item'
                        key={`${pokemon.name}-${i}`}
                    >
                        {pokemon.name}
                        <button onClick={(e) => removepokemon(`${pokemon.name}-${i}`)} className='remove-btn'>x</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default List
