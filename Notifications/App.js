import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Platform } from "react-native";
import * as Notifications from "expo-notifications";
import { useEffect } from "react";
import Constants from "expo-constants";
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
          const pushTokenData = await Notifications.getExpoPushTokenAsync({
            projectId: Constants.expoConfig.extra.eas.projectId,
          });

          if (Platform.OS === "android") {
            Notifications.setNotificationChannelAsync("default", {
              name: "default",
              importance: Notifications.AndroidImportance.MAX,
              vibrationPattern: [0, 250, 250, 250],
              lightColor: "#FF231F7C",
            });
          }
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

  async function sendPushNotification() {
    const message = {
      to: "ExponentPushToken[C9VrHkIOJM9CYtoH8bh-rS]",
      sound: "default",
      title: "Milii here again",
      body: "And here is the what i have to say!",
      data: { someData: "goes here" },
    };

    await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Accept-encoding": "gzip, deflate",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Schedule Notification" onPress={scheduleNotification} />
      <Button title="Send Push Notification" onPress={sendPushNotification} />
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
