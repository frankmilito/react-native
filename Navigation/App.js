import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Categories from "./screens/categories";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverview from "./screens/mealsOverview";
import MealDetails from "./screens/mealDetails";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Favourites from "./screens/favourites";
import { Ionicons } from "@expo/vector-icons";
import FavoriteContextProvider from "./store/context/favourites";
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#351401",
        },
        headerTintColor: "white",
        sceneContainerStyle: {
          backgroundColor: "#3f3f35",
        },
        drawerContentStyle: {
          backgroundColor: "#351504",
        },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#2a2117",
        drawerActiveBackgroundColor: "#ffcfa0",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={Categories}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="list" color={color} size={size} />;
          },
        }}
      />
      <Drawer.Screen
        name="Favourites"
        component={Favourites}
        options={{
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="star" color={color} size={size} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar
        style="light"
        // backgroundColor="transparent"
        // translucent={true}
      />
      {/* <SafeAreaView style={styles.screen}> */}
      <FavoriteContextProvider>
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
                headerShown: false,
              }}
              name="Allcategories"
              component={DrawerNavigation}
            />
            <Stack.Screen name="meals" component={MealsOverview} />
            <Stack.Screen
              name="mealsDetails"
              component={MealDetails}
              options={{ title: "About the meal" }}

              // options={{
              //   headerRight: () => {
              //     return <Text>Icon header</Text>;
              //   },
              // }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoriteContextProvider>
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
