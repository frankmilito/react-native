import React from "react";
import { View, StyleSheet } from "react-native";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";
import { GlobalStyles } from "../../utils/styles";

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  const lists = [
    { id: 1, title: "A book", date: "2019-01-01", amount: "98.00" },
    {
      id: 2,
      title: "Novels read",
      date: "2020-02-11",
      amount: "23",
    },
    {
      id: 3,
      title: "Writs watch",
      date: "2014-10-09",
      amount: "45.40",
    },
    {
      id: 4,
      title: "A pair of trousers",
      date: "2004-11-11",
      amount: "25.50",
    },
    {
      id: 5,
      title: "A pair of leggins",
      date: "2004-11-07",
      amount: "41.30",
    },
    {
      id: 6,
      title: "Novels read",
      date: "2020-02-11",
      amount: "23",
    },
    {
      id: 7,
      title: "Writs watch",
      date: "2014-10-09",
      amount: "45.40",
    },
    {
      id: 8,
      title: "A pair of trousers",
      date: "2004-11-11",
      amount: "25.50",
    },
    {
      id: 9,
      title: "A pair of leggins",
      date: "2004-11-07",
      amount: "41.30",
    },
  ];
  return (
    <View style={styles.container}>
      <ExpenseSummary expenses={lists} period={expensesPeriod} />
      <ExpenseList expenses={lists} />
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
