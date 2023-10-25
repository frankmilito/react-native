import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const BottomNavigation = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <BottomNavigation.Navigator
        initialRouteName="user"
        screenOptions={{
          tabBarActiveTintColor: "#3c0a6b",
          headerStyle: {
            backgroundColor: "#3c0a6b",
          },
          headerTintColor: "white",
        }}
      >
        <BottomNavigation.Screen
          name="welcome"
          component={WelcomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="home" color={color} size={size} />;
            },
          }}
        />
        <BottomNavigation.Screen
          name="user"
          component={UserScreen}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="person" color={color} size={size} />;
            },
          }}
        />
      </BottomNavigation.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
