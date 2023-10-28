import { StyleSheet } from "react-native";
import { useContext } from "react";
import { ExpenseContext } from "../store/expensesContext";
import ExpensesOutput from "../components/expensesOutput/expensesOutput";

function Recent() {
  const expenseCtx = useContext(ExpenseContext);
  const recentExpenses = expenseCtx.expenses.slice(0, 5);
  return (
    <ExpensesOutput
      expensesPeriod={"7 days"}
      fallbackText={"No expenses in past 7 days"}
      expenses={recentExpenses}
    />
  );
}

export default Recent;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
