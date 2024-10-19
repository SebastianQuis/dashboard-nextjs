import PokemonGrid from "@/app/pokemons/components/PokemonGrid";
import type { SimplePokemon } from "@/app/pokemons/interfaces/simple-pokemon";
import Image from "next/image";
import { notFound } from "next/navigation";

const fetchPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
  );
  const dataResponse = await data.json();

  const pokemons = dataResponse.results.map((pokemon: any) => ({
    id: pokemon.url.split("/").at(-2),
    name: pokemon.name,
  }));

  // throw notFound();
  // throw new Error("Paga la deuda!");

  return pokemons;
};

export default async function PokemonsPage() {
  const dataPokemons = await fetchPokemons(50);

  return (
    <div className="flex flex-col p-4">
      <h1 className="text-3xl">
        Pokemons: <span>estático</span>
      </h1>

      <PokemonGrid pokemons={dataPokemons} />
    </div>
  );
}
