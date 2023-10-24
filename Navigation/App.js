import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Categories from "./screens/categories";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverview from "./screens/mealsOverview";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar
        style="dark"
        // backgroundColor="transparent"
        // translucent={true}
      />
      <SafeAreaView style={styles.screen}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="categories" component={Categories} />
            <Stack.Screen name="meals" component={MealsOverview} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
