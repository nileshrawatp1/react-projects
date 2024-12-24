import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pokemonList: [],
    error: null,
    status: 'idle',
};

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        fetchPokemonStart(state) {
            state.status = 'loading';
        },
        fetchPokemonSuccess(state, action) {
            state.status = 'success';
            state.pokemonList = action.payload;
        },
        fetchPokemonError(state, action) {
            state.status = 'error';
            state.error = action.payload;
        },
        removePokemon(state, action) {
            state.pokemonList = state.pokemonList.filter((pokemon, index) => `${pokemon.name}-${index}` !== action.payload);
        }
    },
});

export const { fetchPokemonStart, fetchPokemonSuccess, fetchPokemonError, removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
