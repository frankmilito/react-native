import { View, Text, StyleSheet } from "react-native";
import ExpensesOutput from "../components/expensesOutput/expensesOutput";
import { useContext } from "react";
import { ExpenseContext } from "../store/expensesContext";

function Expenses() {
  const expensesCtx = useContext(ExpenseContext);
  return (
    <View style={styles.rootContainer}>
      <ExpensesOutput
        fallbackText={"No expenses to display"}
        expensesPeriod={"Total"}
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
