import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import * as Location from "expo-location";

export default function App() {
  async function getLocation() {
    console.log("pressed");
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log(location);
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Bare expo app</Text>
        <StatusBar style="auto" />
        <Button title="Get location" onPress={getLocation} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
