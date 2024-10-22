import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { SimplePokemon } from "@/pokemons/interfaces/simple-pokemon";

// interface PokemonState {
//   [key: string]: SimplePokemon;
// }


interface PokemonState {
  favorites: {
    [key: string]: SimplePokemon
  }
}

const getPokemonsLocalStorage = () : PokemonState  => {
  // solucion parcial para el error que se muestra al generar el build de produccion.
  // if ( typeof localStorage === 'undefined' ) return { favorites: {} }; 

  const favorites = JSON.parse( localStorage.getItem('favorite-pokemons') ?? '{}' );
  return favorites;
};

const initialState: PokemonState = {
  favorites: {}
  // ...getPokemonsLocalStorage()
};

const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {




    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const { id, name } = action.payload;
      if (!!state.favorites[id]) {
        delete state.favorites[id];
        // return;
      } else {
        state.favorites[id] = { id, name };
      }

      // todo - no se debe de hacer en redux
      localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorites));
    },
  },
});

export const { toggleFavorite } = pokemonSlice.actions;

export default pokemonSlice.reducer;
