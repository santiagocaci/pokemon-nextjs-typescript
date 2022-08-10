const toggleFavorites = (id: number) => {
  let favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  favorites.includes(id)
    ? (favorites = favorites.filter((pokeId) => pokeId !== id))
    : favorites.push(id);

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const existInFavorites = (id: number): boolean => {
  // if (typeof window === "undefined") return false;

  const favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
  return favorites.includes(id);
};

const getFavorites = (): number[] => {
  if (typeof window === "undefined") return [];

  return JSON.parse(localStorage.getItem("favorites") || "[]");
};

const localFavorites = { toggleFavorites, existInFavorites, getFavorites };

export default localFavorites;
