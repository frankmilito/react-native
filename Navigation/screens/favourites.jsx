import React, { useContext } from "react";
import MealsList from "../components/mealsList/mealsList";
import { FavoriteContext } from "../store/context/favourites";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

const Favourites = () => {
  // const { ids } = useContext(FavoriteContext);
  const { ids } = useSelector((state) => state.favorites);
  const favoriteMeals = MEALS.filter((meal) => ids.includes(meal.id));

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals</Text>
      </View>
    );
  }
  return <MealsList items={favoriteMeals} />;
};

export default Favourites;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
  },
});
