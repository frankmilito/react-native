import { createContext, useReducer } from "react";

const Dummy_expenses = [
  { id: 1, description: "A book", date: "2019-01-01", amount: "98.00" },
  // {
  //   id: 2,
  //   description: "Novels read",
  //   date: "2020-02-11",
  //   amount: "23",
  // },
  // {
  //   id: 3,
  //   description: "Writs watch",
  //   date: "2014-10-09",
  //   amount: "45.40",
  // },
  // {
  //   id: 4,
  //   description: "A pair of trousers",
  //   date: "2004-11-11",
  //   amount: "25.50",
  // },
  // {
  //   id: 5,
  //   description: "A pair of leggins",
  //   date: "2004-11-07",
  //   amount: "41.30",
  // },
  // {
  //   id: 6,
  //   description: "Novels read",
  //   date: "2020-02-11",
  //   amount: "23",
  // },
  // {
  //   id: 7,
  //   description: "Writs watch",
  //   date: "2014-10-09",
  //   amount: "45.40",
  // },
  // {
  //   id: 8,
  //   description: "A pair of trousers",
  //   date: "2004-11-11",
  //   amount: "25.50",
  // },
  {
    id: 9,
    description: "A pair of leggins",
    date: "2004-11-07",
    amount: "41.30",
  },
];

export const ExpenseContext = createContext({
  expense: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const id = Date.now();
      return [{ ...action.payload, id }, ...state];
    case "UPDATE":
      const updateIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );

      const updatableExpense = state[updateIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updateIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

const ExpensesContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, Dummy_expenses);
  const addExpense = (expenseData) => {
    dispatch({
      type: "ADD",
      payload: expenseData,
    });
  };

  const deleteExpense = (id) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };

  const updateExpense = (id, expenseData) => {
    dispatch({
      type: "UPDATE",
      payload: {
        id,
        data: expenseData,
      },
    });
  };

  const value = {
    expenses: expensesState,
    addExpense,
    deleteExpense,
    updateExpense,
  };

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
};

export default ExpensesContextProvider;
