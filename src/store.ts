import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./features/pokemon.slice"
// importing the reducer from todo slice

// use 'configreStrore'  function to create the store
const store = configureStore({
  reducer: {
    pokemons: pokemonReducer
  }
});

// defining the 'rootstate' as the return type
export type RootState = ReturnType<typeof store.getState>;
export default store
