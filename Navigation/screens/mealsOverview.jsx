import { View, StyleSheet, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/mealItem";

const MealsOverview = ({ route }) => {
  const {
    params: { categoryId },
  } = route;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  const renderMeal = (itemData) => {
    const { item } = itemData;

    const mealProps = {
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
        data={displayedMeals}
        key={(item) => item.id}
        renderItem={(itemData) => renderMeal(itemData)}
      />
    </View>
  );
};

export default MealsOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
