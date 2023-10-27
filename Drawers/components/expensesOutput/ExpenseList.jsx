import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={(renderItems) => <ExpenseItem item={renderItems.item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpenseList;

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#0a0f63",
    marginVertical: 8,
    borderRadius: 8,
  },
});
