import { useEffect, useState } from "react";

import { Layout } from "../../components/layouts";
import { FavoritePokemons } from "../../components/pokemon";
import { NoFavorites } from "../../components/ui";
import { localFavorites } from "../../utils";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    setFavorites(localFavorites.getFavorites);
  }, []);

  return (
    <>
      <Layout title="My Favorites">
        {favorites.length === 0 ? (
          <NoFavorites />
        ) : (
          <FavoritePokemons pokemonsId={favorites} />
        )}
      </Layout>
    </>
  );
};

export default FavoritesPage;
