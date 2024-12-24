import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPokemonStart, fetchPokemonSuccess, fetchPokemonError } from '../Redux/slices'
import List from './List';

function FetchPokemon() {
    const dispatch = useDispatch();
    const pokemonList = useSelector(state => state.pokemon.pokemonList);
    const status = useSelector(state => state.pokemon.status);
    const error = useSelector(state => state.pokemon.error);

    const fetchData = async () => {
        dispatch(fetchPokemonStart());
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
            if (!response.ok) {
                throw new Error('Something went wrong');
            }
            const data = await response.json();
            const pokemonArray = data.results;
            let pokemonResult = await Promise.all(
                pokemonArray.map(async (pokemon) => {
                    const pokemonImageResp = await fetch(pokemon.url);
                    if (!pokemonImageResp.ok) {
                        throw new Error('Something went wrong');
                    }
                    const pokemonImageData = await pokemonImageResp.json();
                    return {
                        name: pokemon.name,
                        image: pokemonImageData.sprites.front_default
                    }
                })
            );
            pokemonResult = pokemonResult.sort((a,b) => a.name.localeCompare(b.name));
            dispatch(fetchPokemonSuccess(pokemonResult));
        } catch (error) {
            dispatch(fetchPokemonError(error.message));
        }
    }

    useEffect(() => {
        fetchData();

        return () => {
            dispatch({ type: 'RESET_POKEMON' });
        }
    }, [])



    return (
        <>
            {status === 'loading' && <h1>Loading...</h1>}
            {status === 'error' && <h1>{error}</h1>}
            {status === 'success' && <List pokemonList={pokemonList} />}
        </>
    )
}

export default FetchPokemon
