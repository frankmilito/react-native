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
        style="light"
        // backgroundColor="transparent"
        // translucent={true}
      />
      {/* <SafeAreaView style={styles.screen}> */}
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#351401",
            },
            headerTintColor: "white",
            contentStyle: {
              backgroundColor: "#3f3f35",
            },
          }}
        >
          <Stack.Screen
            options={{
              title: "All Categories",
            }}
            name="categories"
            component={Categories}
          />
          <Stack.Screen
            name="meals"
            component={MealsOverview}
            options={({ route, navigation }) => {
              const catId = route.params.categoryId;
              return {
                title: catId,
              };
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* </SafeAreaView> */}
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
