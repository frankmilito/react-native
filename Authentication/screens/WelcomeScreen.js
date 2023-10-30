import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../store/authContext";

function WelcomeScreen() {
  const authCtx = useContext(AuthContext);
  const [message, setMessage] = useState("");
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `https://react-native-fd77a-default-rtdb.firebaseio.com/message.json?auth=${authCtx.token}`
        );
        console.log(res.data);
        setMessage(res.data);
      } catch (error) {
        console.log(
          // error.response.data.error.errors[0].message.replace(/_/g, " ")
          error.response,
          "error"
        );
      }
    };
    getData();
  }, []);
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{message}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
