import CatergoryGridTile from "../components/catergoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";

const Categories = ({ navigation }) => {
  const handlePress = (item) => {
    navigation.navigate("meals", {
      categoryId: item.item.id,
    });
    // console.log(item, "items");
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      numColumns={2}
      horizontal={false}
      renderItem={(itemData) => (
        <CatergoryGridTile
          title={itemData.item.title}
          color={itemData.item.color}
          onPress={handlePress.bind(this, itemData)}
        />
      )}
    />
  );
};

export default Categories;
