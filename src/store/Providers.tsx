"use client";

import { Provider, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setInitialPokemon } from "./pokemons/pokemonSlice";
import { store, useAppDispatch } from ".";

interface Props {
  children: React.ReactNode;
}

export default function Providers({ children }: Props) {

  useEffect(() => {
    const pokemons = JSON.parse( localStorage.getItem('favorite-pokemons') ?? '{}' )
    store.dispatch(setInitialPokemon( pokemons ));
  }, []);
  
  return (  
    <Provider store={store}>{children}</Provider>
  );
}
