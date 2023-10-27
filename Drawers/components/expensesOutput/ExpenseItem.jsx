import { View, StyleSheet, Text, Pressable } from "react-native";
import { GlobalStyles } from "../../utils/styles";

const ExpenseItem = ({ item }) => {
  const { title, date, amount } = item;

  const expenseHandler = () => {};
  return (
    <Pressable
      onPress={expenseHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.rootContainer}>
        <View>
          <Text style={[styles.title, styles.description]}>{title}</Text>
          <Text style={styles.title}>{date}</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.amount}>$ {parseInt(amount).toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    backgroundColor: GlobalStyles.colors.primary500,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 4,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
  },
  title: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    marginBottom: 4,
    fontSize: 16,
    fontWeight: "bold",
  },
  box: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },

  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
    minWidth: 60,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.8,
  },
});
