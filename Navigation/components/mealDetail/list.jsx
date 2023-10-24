import React from "react";
import { View, Text, StyleSheet } from "react-native";

const List = ({ data }) => {
  return data.map((dataPoint) => (
    <View style={styles.listItem}>
      <Text style={styles.text} key={dataPoint}>
        {dataPoint}
      </Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginHorizontal: 8,
    marginVertical: 4,
    backgroundColor: "#e2b497",
  },
  text: {
    color: "brown",
    textAlign: "center",
  },
});
