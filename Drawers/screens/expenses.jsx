import { View, Text, StyleSheet } from "react-native";
import ExpensesOutput from "../components/expensesOutput/expensesOutput";

function Expenses() {
  return (
    <View style={styles.rootContainer}>
      <ExpensesOutput expensesPeriod={"Last 7 days"} />
    </View>
  );
}

export default Expenses;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  highlight: {
    fontWeight: "bold",
    color: "#eb1064",
  },
});
