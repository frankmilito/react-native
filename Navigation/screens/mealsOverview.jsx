import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealsOverview = ({ route }) => {
  const {
    params: { categoryId },
  } = route;
  console.log(categoryId);
  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen for category {categoryId}</Text>
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
