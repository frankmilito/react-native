import { View, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../utils/styles";

const ExpenseSummary = ({ period, expenses }) => {
  const total = expenses?.reduce((sum, expense) => {
    return sum + parseInt(expense.amount);
  }, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{period}</Text>
      <Text style={styles.sum}>$ {total?.toFixed(2)}</Text>
    </View>
  );
};

export default ExpenseSummary;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    paddingVertical: 12,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    marginBottom: 10,
  },
  period: {
    fontSize: 12,
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
  },
});
