import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Subtitle = ({ children }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 18,
    color: "#e2b497",
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    borderBottomWidth: 2,
    borderBottomColor: "#e2b497",
    marginHorizontal: 8,
    marginVertical: 4,
    padding: 6,
  },
});
