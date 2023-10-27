import { StyleSheet, View } from "react-native";

const Container = ({ children }) => {
  return <View style={styles.rootContainer}>{children}</View>;
};

export default Container;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#070a38",
    padding: 16,
  },
});
