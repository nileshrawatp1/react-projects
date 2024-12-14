import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setError, setPokemonList, setStatus } from '../redux/pokemonSlice';
import { selectList, selectStatus, selectError } from '../redux/selectors';
import List from './List';
import Navbar from './Navbar';

function Home() {
    const dispatch = useDispatch();
    const list = useSelector(selectList);
    const status = useSelector(selectStatus);
    const error = useSelector(selectError);

    const fetchPokemonList = async () => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
            if (response.status === 200) {
                let data = await response.json();
                data = data.results;
                console.log(data)
                data = data.sort((a,b) => a.name.localeCompare(b.name))
                dispatch(setPokemonList(data))
                dispatch(setStatus('idle'))
            } else {
                console.log(`ERROR-CODE ${response.status}: Check The API`)
                dispatch(setError(response.status))
            }
        } catch (error) {
            console.log('error: ', error.message)
            dispatch(setError(error.message))
        }
    }

    useEffect(() => {
        dispatch(setStatus('loading'))
        fetchPokemonList()
    }, [])


    return (
        <>
            <Navbar />
            {status === 'loading' && <p>Loading...</p>}
            {error !== null && <p>Error...{error}</p>}
            {status === 'idle' && error === null && <List data={list}></List>}
        </>
    )
}

export default Home
