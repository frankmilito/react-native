import axios from "axios";

const baseURL = "https://react-native-fd77a-default-rtdb.firebaseio.com";

export const storeExpense = async (expenseData) => {
  const res = await axios.post(`${baseURL}/expenses.json`, expenseData);
  const id = res.data.name;
  console.log(res.data, "names");
  return id;
};

export const fetchExpense = async () => {
  try {
    const res = await axios.get(`${baseURL}/expenses.json`);
    const expenses = [];
    for (const key in res.data) {
      const expObj = {
        id: key,
        amount: res.data[key].amount,
        description: res.data[key].description,
        date: res.data[key].date,
      };

      expenses.push(expObj);
    }
    return expenses;
  } catch (error) {
    console.log(error, "error");
  }
};

export const updateExpenseStore = (id, expenseData) => {
  return axios.put(`${baseURL}/expenses/${id}.json`, expenseData);
};

export const deleteExpenseStore = async (id) => {
  return await axios.delete(`${baseURL}/expenses/${id}.json`);
};
