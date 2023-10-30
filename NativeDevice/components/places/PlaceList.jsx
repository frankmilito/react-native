import { Text, FlatList, StyleSheet, View } from "react-native";
import PlaceItem from "./PlaceItem";
import { Colors } from "../../constants/colors";

const PlaceList = ({ places }) => {
  const renderData = ({ item }) => {
    return <PlaceItem place={item} />;
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
    />
  );
};

export default PlaceList;

const styles = StyleSheet.create({
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
