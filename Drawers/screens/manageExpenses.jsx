import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/ui/IconButton";
import { GlobalStyles } from "../utils/styles";
import Button from "../components/ui/Button";
import { useContext } from "react";
import { ExpenseContext } from "../store/expensesContext";

const ManageExpenses = ({ route, navigation }) => {
  const {
    addExpense,
    deleteExpense: deleteExpenses,
    updateExpense,
  } = useContext(ExpenseContext);
  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [expenseId, navigation]);

  const deleteExpense = () => {
    deleteExpenses(expenseId);
    navigation.goBack();
  };

  const confirmhandler = (expenseId) => {
    if (isEditing) {
      updateExpense(route.params.expenseId, {
        title: "Updated",
        amount: 421.0,
        date: "2017-09-92",
      });
    } else {
      addExpense({
        title: "Testing this",
        amount: 40.99,
        date: "2018-09-9",
      });
    }
    navigation.goBack();
  };

  const cancelHandler = (expenseId) => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode={"flat"} onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmhandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            name="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpense}
          />
        </View>
      )}
      <Text>h</Text>
    </View>
  );
};

export default ManageExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginHorizontal: 8,
    minWidth: 120,
  },
});
