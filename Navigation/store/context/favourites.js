import { createContext, useState } from "react";

export const FavoriteContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoriteContextProvider = ({ children }) => {
  const [favMealId, setFavMealId] = useState([]);

  const addFavorite = (id) => {
    setFavMealId((prevId) => [...prevId, id]);
  };
  const removeFavorite = (id) => {
    setFavMealId((prevId) => prevId.filter((mealId) => mealId !== id));
  };

  const value = {
    ids: favMealId,
    addFavorite,
    removeFavorite,
  };
  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};
export default FavoriteContextProvider;
