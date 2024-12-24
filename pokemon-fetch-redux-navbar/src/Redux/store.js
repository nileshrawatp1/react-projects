import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./slices";

export default configureStore({
    reducer: {
        pokemon: pokemonReducer,
    },
});
