import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { SimplePokemon } from "@/pokemons/interfaces/simple-pokemon";

interface PokemonState {
  [key: string]: SimplePokemon;
}

const initialState: PokemonState = {
  1: { id: "1", name: "bulbasur" },
  2: { id: "2", name: "bulbasur" },
};

const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const { id, name } = action.payload;
      if (state[id]) {
        delete state[id];
        return;
      }

      state[id] = { id, name };
    },
  },
});

export const { toggleFavorite } = pokemonSlice.actions;

export default pokemonSlice.reducer;
