import PokemonGrid from "@/pokemons/components/PokemonGrid";

export const metadata = {
  title: "Pokemones Favoritos",
  description: "Pokemones Favoritos",
};

export default function FavoritosPage() {
  return (
    <div className="flex flex-col p-4">
      <h1 className="text-3xl">Pokemones favoritos</h1>

      <PokemonGrid pokemons={[]} />
    </div>
  );
}
