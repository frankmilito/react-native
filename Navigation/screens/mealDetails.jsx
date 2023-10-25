import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/mealDetails";
import Subtitle from "../components/mealDetail/subtitle";
import List from "../components/mealDetail/list";
import IconButton from "../components/iconButton";

const MealDetails = ({ route, navigation }) => {
  const {
    params: { mealId },
  } = route;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const handlePress = () => console.log("pressed");
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton onPress={handlePress} icon="star" color={"white"} />;
      },
    });
  }, [navigation]);

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
