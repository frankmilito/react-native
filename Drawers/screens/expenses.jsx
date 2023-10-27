import { View, Text, StyleSheet } from "react-native";
import ExpensesOutput from "../components/expensesOutput/expensesOutput";
import { useContext } from "react";
import { ExpenseContext } from "../store/expensesContext";

function Expenses() {
  const expensesCtx = useContext(ExpenseContext);
  console.log(expensesCtx, "hello");
  return (
    <View style={styles.rootContainer}>
      <ExpensesOutput
        expensesPeriod={"Last 7 days"}
        expenses={expensesCtx.expenses}
      />
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
