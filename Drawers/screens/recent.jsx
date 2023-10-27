import { StyleSheet } from "react-native";
import Container from "../components/Container";

import ExpenseSummary from "../components/expensesOutput/ExpenseSummary";
import ExpenseList from "../components/expensesOutput/ExpenseList";

function Recent() {
  return (
    <Container>
      <ExpenseSummary />
      <ExpenseList />
    </Container>
  );
}

export default Recent;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
