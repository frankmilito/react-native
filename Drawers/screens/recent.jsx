import { StyleSheet } from "react-native";
import { useContext, useEffect } from "react";
import { ExpenseContext } from "../store/expensesContext";
import ExpensesOutput from "../components/expensesOutput/expensesOutput";
import { fetchExpense } from "../utils/http";
import { useState } from "react";
import Loading from "../components/ui/Loading";
import ErrorOverlay from "../components/ui/Error";

function Recent() {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState("");
  const expenseCtx = useContext(ExpenseContext);
  const recentExpenses = expenseCtx?.expenses?.slice(0, 5);

  useEffect(() => {
    async function getExpenses() {
      try {
        const expenses = await fetchExpense();
        expenseCtx.setExpenses(expenses);
      } catch (error) {
        setError("Something went wrong");
      }
      setIsFetching(false);
    }
    getExpenses();
  }, []);

  const errorHandler = () => setError(null);

  if (error && !isFetching) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />;
  }
  if (isFetching) {
    return <Loading />;
  }
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
