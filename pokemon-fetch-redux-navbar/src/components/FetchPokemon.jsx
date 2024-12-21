import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { setPokemonList, setError } from '../redux/slices'
import { selectError, selectStatus } from "../redux/selectors"
import List from './List'

function FetchPokemon() {
    const dispatch = useDispatch()
    const error = useSelector(selectError)
    const status = useSelector(selectStatus)

    const fetchData = async () => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
            const responseObj = await response.json();
            let data = await responseObj.results;
            data = data.sort((a, b) => a.name.localeCompare(b.name))
            dispatch(setPokemonList(data))
        } catch (error) {
            dispatch(setError(`Error: ${error.message}`))
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            {error !== null && <p className='error-text'>Failed To Fetch: {error}</p>}
            {status === 'Loading' && <p className='loading-text'>Loading...</p>}
            {error === null && status === 'success' && <List />}
        </>
    )
}

export default FetchPokemon
