import React from 'react'
import { useDispatch } from 'react-redux'
import { removePokemon } from '../Redux/slices';

function List({ pokemonList }) {
    const dispathch = useDispatch();
    const removeCard = (item) => {
        dispathch(removePokemon(item))
    }
    return (
        <>
            <div className='pokemon-container'>
                {pokemonList.map((pokemon, index) => (
                    <div key={`${pokemon.name}-${index}`} className='pokemon-card'>
                        <img src={pokemon.image} alt={pokemon.name} />
                        <h3 className='pokemon-name'>{pokemon.name}</h3>
                        <button className="remove-pokemon" onClick={() => removeCard(`${pokemon.name}-${index}`)}>x</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default List
