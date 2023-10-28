import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/ui/IconButton";
import { GlobalStyles } from "../utils/styles";
import Button from "../components/ui/Button";
import { useContext } from "react";
import { ExpenseContext } from "../store/expensesContext";
import ExpenseForm from "../components/manageExpense/ExpenseForm";
import {
  storeExpense,
  updateExpenseStore,
  deleteExpenseStore,
} from "../utils/http";
import { useState } from "react";
import Loading from "../components/ui/Loading";
import ErrorOverlay from "../components/ui/Error";

const ManageExpenses = ({ route, navigation }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState("");

  const {
    addExpense,
    deleteExpense: deleteExpenses,
    updateExpense,
    expenses,
  } = useContext(ExpenseContext);
  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;

  const selectedExpense = expenses?.find((expense) => expense.id === expenseId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [expenseId, navigation]);

  const deleteExpense = async () => {
    try {
      setIsFetching(true);
      deleteExpenses(expenseId);
      await deleteExpenseStore(expenseId);
    } catch (error) {
      setError("Could not delete expense");
    }
    // setIsFetching(false);
    navigation.goBack();
  };

  const confirmhandler = async (expenseData) => {
    setIsFetching(true);
    try {
      if (isEditing) {
        updateExpense(route.params.expenseId, expenseData);
        await updateExpenseStore(route.params.expenseId, expenseData);
      } else {
        const id = await storeExpense(expenseData);
        addExpense({ ...expenseData, id });
      }
      navigation.goBack();
    } catch (error) {
      setError("Could not save expense please try again");
      setIsFetching(false);
    }
  };

  const cancelHandler = (expenseId) => {
    navigation.goBack();
  };

  const errorHandler = () => setError(null);

  if (error && !isFetching) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />;
  }

  if (isFetching) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        isEditing={isEditing}
        cancelHandler={cancelHandler}
        onSubmit={confirmhandler}
        submitButtonLabel={isEditing ? "Update" : "Add"}
        selectedExpense={selectedExpense}
      />

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
});
