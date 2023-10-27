import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Expenses from "./screens/expenses";
import Recent from "./screens/recent";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ManageExpenses from "./screens/manageExpenses";
import { GlobalStyles } from "./utils/styles";
import IconButton from "./components/ui/IconButton";

const BottomNavigation = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ExpenseOverview = () => {
  return (
    <BottomNavigation.Navigator
      // initialRouteName="user"
      screenOptions={{
        tabBarActiveTintColor: "#e8dc00",
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            name="add"
            color={tintColor}
            size={24}
            onPress={() => {}}
          />
        ),
      }}
    >
      <BottomNavigation.Screen
        name="recent"
        component={Recent}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="hourglass" color={color} size={size} />;
          },
          tabBarLabel: "Recent",
          headerTitle: "Recent Expenses ",
        }}
      />
      <BottomNavigation.Screen
        name="expenses"
        component={Expenses}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="calendar" color={color} size={size} />;
          },
          title: "All Expenses",
          headerRight: ({ color, size }) => (
            <Ionicons name="add" color={"white"} size={24} />
          ),
        }}
      />
    </BottomNavigation.Navigator>
  );
};
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="expenseOverview" screenOptions={{}}>
          <Stack.Screen name="manageExpense" component={ManageExpenses} />
          <Stack.Screen
            name="expenseOverview"
            component={ExpenseOverview}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
