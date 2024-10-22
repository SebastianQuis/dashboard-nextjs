"use client";

import Link from "next/link";
import Image from "next/image";

import { SimplePokemon } from "../interfaces/simple-pokemon";
import { Heart, HeartPulse } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store";
import { toggleFavorite } from "@/store/pokemons/pokemonSlice";

interface Props {
  pokemon: SimplePokemon;
}

export default function PokemonCard({ pokemon }: Props) {
  // todo -  !! la doble negacion convierte un valor undefined a un valor booleano
  const isFavorite = useAppSelector((state) => !!state.pokemons[pokemon.id]);
  const dispatch = useAppDispatch();

  const onToggleFavorite = () => {
    dispatch(toggleFavorite(pokemon));
  };

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center  text-center p-6 bg-gray-800 border-b">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            alt={pokemon.name}
            width={100}
            height={100}
            priority={false}
          />

          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
            {pokemon.name}
          </p>
          <div className="mt-5">
            <Link
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
              href={`/dashboard/pokemons/${pokemon.name}`}
            >
              By name
            </Link>
          </div>
        </div>
        <div className="border-b">
          <div
            onClick={onToggleFavorite}
            className="px-4 py-2 hover:bg-gray-100 flex cursor-pointer"
          >
            <div className="text-gray-800">
              <Heart
                className={`${isFavorite ? "text-red-700" : "text-gray-600"}`}
              />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                {isFavorite ? <span>{pokemon.name}</span> : <span>-</span>}
              </p>
              <p className="text-xs text-gray-500">Click para cambiar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
