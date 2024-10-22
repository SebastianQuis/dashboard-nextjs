"use client";

import { useAppSelector } from "@/store";
import PokemonCard from "./PokemonCard";
import { HeartCrackIcon } from "lucide-react";
import { useState } from "react";

export default function FavoritePokemons() {
  const pokemonsFavorite = useAppSelector((state) => state.pokemons);
  const listPokemonsFavorite = Object.values(pokemonsFavorite);

  const [pokemons, setpokemons] = useState(listPokemonsFavorite);

  return (
    <>
      {pokemons.length < 1 ? (
        <NoFavoritePokemons />
      ) : (
        <div className="flex flex-wrap gap-8 items-center justify-center">
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      )}
    </>
  );
}

function NoFavoritePokemons() {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center ">
      <HeartCrackIcon size={50} className="text-red-500 mb-5" />
      <h1>Sin favoritos</h1>
    </div>
  );
}
