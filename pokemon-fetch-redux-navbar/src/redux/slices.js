import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pokemonList: [],
    error: null,
    status: 'Loading'
}

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setPokemonList: (state, action) => {
            state.pokemonList = action.payload
            state.status = 'success'
        },
        setError: (state, action) => {
            state.error = action.payload
            state.status = 'failed'
        },
        removePokemon: (state, action) => {
            state.pokemonList = state.pokemonList.filter((pokemon, i) => (
                `${pokemon.name}-${i}` !== action.payload
            ))
        }
    }
})

export const {setPokemonList, setError, removePokemon} = pokemonSlice.actions;
export default pokemonSlice.reducer;
