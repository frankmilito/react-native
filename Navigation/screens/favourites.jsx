import React, { useContext } from "react";
import MealsList from "../components/mealsList/mealsList";
import { FavoriteContext } from "../store/context/favourites";
import { MEALS } from "../data/dummy-data";

const Favourites = () => {
  const { ids } = useContext(FavoriteContext);
  const favoriteMeals = MEALS.filter((meal) => ids.includes(meal.id));

  return <MealsList items={favoriteMeals} />;
};

export default Favourites;
