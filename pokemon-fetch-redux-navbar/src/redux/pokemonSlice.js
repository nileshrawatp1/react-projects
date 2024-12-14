import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
    status: 'idle',
    error: null
}

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setPokemonList: (state, action) => {
            state.list = action.payload
        },
        setStatus: (state, action) => {
            state.status = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
            state.status = 'failed'
        },
        removePokemon: (state, action) => {
            state.list = state.list.filter((pokemon, i) => `${pokemon.name}-${i}` !== action.payload)
        }
    }
})

export const { setPokemonList, setStatus, setError, removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer
