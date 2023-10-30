import { Text, FlatList, StyleSheet, View } from "react-native";
import PlaceItem from "./PlaceItem";
import { Colors } from "../../constants/colors";
import { useNavigation } from "@react-navigation/native";

const PlaceList = ({ places }) => {
  const navigation = useNavigation();

  const handleSelect = (id) => {
    navigation.navigate("placeDetails", {
      placeId: id,
    });
  };
  const renderData = ({ item }) => {
    return (
      <PlaceItem place={item} onSelect={handleSelect.bind(this, item.id)} />
    );
  };

  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fbText}>No places yet Start - adding some</Text>
      </View>
    );
  }
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={renderData}
      style={styles.list}
    />
  );
};

export default PlaceList;

const styles = StyleSheet.create({
  list: {
    margin: 24,
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fbText: {
    fontSize: 18,
    color: Colors.primary200,
  },
});
