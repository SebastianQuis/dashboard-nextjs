import FavoritePokemons from "@/pokemons/components/FavoritePokemons";

export const metadata = {
  title: "Pokemones Favoritos",
  description: "Pokemones Favoritos",
};

export default function FavoritosPage() {
  return (
    <div className="flex flex-col p-4 w-[calc(100vw-320px)]">
      <h1 className="text-3xl">Pokemones favoritos</h1>

      <FavoritePokemons />
    </div>
  );
}
