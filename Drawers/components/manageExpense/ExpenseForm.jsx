import { useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import Input from "./Input";
import Button from "../ui/Button";

const ExpenseForm = ({
  cancelHandler,
  submitButtonLabel,
  onSubmit,
  selectedExpense,
}) => {
  const [inputValues, setInputValues] = useState({
    amount: selectedExpense?.amount.toString(),
    date: selectedExpense?.date,
    description: selectedExpense?.description,
  });

  const inputChangedValue = (inputIdentifier, value) => {
    setInputValues({ ...inputValues, [inputIdentifier]: value });
  };

  const submitHandler = () => {
    const expenseData = {
      amount: +inputValues.amount,
      date: inputValues.date,
      description: inputValues.description,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData?.date?.trim().length > 0;
    const descriptionIsValid = expenseData?.description?.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      Alert.alert("Invalid input", "Please check your input validity");
      return;
    }
    onSubmit(expenseData);
  };
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          label={"Amount"}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangedValue.bind(this, "amount"),
            value: inputValues.amount,
          }}
          style={styles.rowInput}
        />
        <Input
          label={"Date"}
          textInputConfig={{
            placeholder: "yyyy-mm-dd",
            maxLength: 10,
            onChangeText: inputChangedValue.bind(this, "date"),
            value: inputValues.date,
          }}
        />
      </View>
      <Input
        label={"Description"}
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangedValue.bind(this, "description"),
          value: inputValues.description,
        }}
      />
      <View style={styles.buttons}>
        <Button style={styles.button} mode={"flat"} onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  form: { marginTop: 50 },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginVertical: 24,
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  rowInput: {
    flex: 1,
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
