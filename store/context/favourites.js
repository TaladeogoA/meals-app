import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [favMealIds, setFavMealIds] = useState([]);

  const addFavorite = (id) => {
    setFavMealIds((prev) => [...prev, id]);
  };

  const removeFavorite = (id) => {
    setFavMealIds((prev) => prev.filter((mealId) => mealId !== id));
  };

  const contextValue = {
    ids: favMealIds,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={contextValue}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
