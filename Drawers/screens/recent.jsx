import { StyleSheet } from "react-native";
import Container from "../components/Container";

import ExpenseSummary from "../components/expensesOutput/ExpenseSummary";
import ExpenseList from "../components/expensesOutput/ExpenseList";
import { useContext } from "react";
import { ExpenseContext } from "../store/expensesContext";

function Recent() {
  const expenseCtx = useContext(ExpenseContext);
  const recentExpenses = expenseCtx.expenses.slice(0, 5);
  console.log(recentExpenses);
  return (
    <Container>
      <ExpenseSummary />
      <ExpenseList expenses={recentExpenses} />
    </Container>
  );
}

export default Recent;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
