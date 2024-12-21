import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./slices"

export const store = configureStore({
    reducer: pokemonReducer
})
