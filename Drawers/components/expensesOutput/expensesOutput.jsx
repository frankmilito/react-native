import React from "react";
import { View, StyleSheet } from "react-native";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";
import { GlobalStyles } from "../../utils/styles";
import { useContext } from "react";

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  console.log(expenses);
  return (
    <View style={styles.container}>
      <ExpenseSummary expenses={expenses} period={expensesPeriod} />
      <ExpenseList expenses={expenses} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
    paddingBottom: 0,
  },
});
