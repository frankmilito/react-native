import React, { useContext, useLayoutEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/mealDetails";
import Subtitle from "../components/mealDetail/subtitle";
import List from "../components/mealDetail/list";
import IconButton from "../components/iconButton";
import { FavoriteContext } from "../store/context/favourites";

const MealDetails = ({ route, navigation }) => {
  const { ids, addFavorite, removeFavorite } = useContext(FavoriteContext);
  const {
    params: { mealId },
  } = route;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  // const mealIsFavorite = ids.includes(mealId);
  const mealIsFavorite = ids.find((id) => id === mealId);

  const handleIsFavorite = () => {
    if (mealIsFavorite) {
      removeFavorite(mealId);
    } else {
      addFavorite(mealId);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={handleIsFavorite}
            icon={mealIsFavorite ? "star" : "star-outline"}
            color={"white"}
            size={18}
          />
        );
      },
    });
  }, [navigation, ids]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetail
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        duration={selectedMeal.duration}
        color="white"
      />
      <View style={styles.listOuter}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>

          <List data={selectedMeal.ingredients} />

          <Subtitle>Steps</Subtitle>

          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetails;
const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  listOuter: {
    alignItems: "center",
  },
});
