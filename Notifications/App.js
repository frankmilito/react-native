import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import * as Notifications from "expo-notifications";
import { useEffect } from "react";

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true,
    };
  },
});

async function requestNotificationPermissions() {
  const { status } = await Notifications.getPermissionsAsync();
  if (status !== "granted") {
    const { status: newStatus } = await Notifications.requestPermissionsAsync();
    if (newStatus === "granted") {
      return true; // Permission granted
    } else {
      return false; // Permission denied
    }
  }
  return true; // Permission was already granted
}

export default function App() {
  useEffect(() => {
    async function configurePushNotifification() {
      const hasPermissions = await requestNotificationPermissions();

      if (hasPermissions) {
        try {
          const pushTokenData = await Notifications.getExpoPushTokenAsync();
          console.log(pushTokenData);
        } catch (error) {
          console.log(error, "error");
        }
      }
    }
    configurePushNotifification();
  }, []);

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        // console.log(notification.request.content.data);
        console.log("notification");
      }
    );

    const response = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log(response);
        console.log("response");
      }
    );
    return () => {
      response.remove();
      subscription.remove();
    };
  }, []);
  const scheduleNotification = async () => {
    const hasPushNotificationPermissionGranted =
      await requestNotificationPermissions();

    if (hasPushNotificationPermissionGranted) {
      Notifications.scheduleNotificationAsync({
        content: {
          title: "My first notification",
          body: "This is the detail of this notification from mili",
          data: { user: "mili is going places" },
        },
        trigger: {
          seconds: 3,
        },
      });
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Schedule Notification" onPress={scheduleNotification} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
