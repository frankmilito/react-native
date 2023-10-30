import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Allplaces from "./screens/Allplaces";
import AddPlace from "./screens/AddPlace";
import IconButton from "./components/ui/IconButton";
import { Colors } from "./constants/colors";
import Map from "./screens/Map";
import MapProvider from "./store/context";
import { useCallback, useEffect, useState } from "react";
import { init } from "./util/database";
import * as SplashScreen from "expo-splash-screen";
import PlacesDetails from "./screens/PlacesDetails";
const Stack = createNativeStackNavigator();
export default function App() {
  const [dbInitialized, setDbInitialized] = useState(false);

  // code from Expo using SplashScreen:
  useEffect(() => {
    const prepare = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        init();
      } catch (e) {
        console.warn(e);
      } finally {
        setDbInitialized(true);
      }
    };
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (dbInitialized) {
      await SplashScreen.hideAsync();
    }
  }, [dbInitialized]);

  if (!dbInitialized) return null;

  return (
    <>
      <StatusBar style="dark" />
      <MapProvider>
        <NavigationContainer onReady={onLayoutRootView}>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: Colors.primary500,
              },
              headerTintColor: Colors.gray700,
              contentStyle: {
                backgroundColor: Colors.gray700,
              },
            }}
          >
            <Stack.Screen
              name="AllPlaces"
              component={Allplaces}
              options={({ navigation }) => ({
                title: "Your Favorite Places",
                headerRight: ({ tintColor }) => {
                  return (
                    <IconButton
                      icon="add"
                      color={tintColor}
                      size={24}
                      onPress={() => navigation.navigate("AddPlace")}
                    />
                  );
                },
              })}
            />
            <Stack.Screen
              name="AddPlace"
              component={AddPlace}
              options={{
                title: "Add a new place",
              }}
            />
            <Stack.Screen
              name="Map"
              component={Map}
              // options={{
              //   title: "Add a new place",
              // }}
            />
            <Stack.Screen
              name="placeDetails"
              component={PlacesDetails}
              // options={{
              //   title: "Add a new place",
              // }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </MapProvider>
    </>
  );
}
