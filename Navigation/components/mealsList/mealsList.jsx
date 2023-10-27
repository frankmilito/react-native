import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "../mealItem";

const MealsList = ({ items }) => {
  const renderMeal = (itemData) => {
    const { item } = itemData;

    const mealProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      duration: item.duration,
      complexity: item.complexity,
    };
    return <MealItem {...mealProps} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        key={(item) => item.id}
        renderItem={(itemData) => renderMeal(itemData)}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
