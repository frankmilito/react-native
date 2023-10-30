import axios from "axios";
import { Alert } from "react-native";

const API_KEY = "AIzaSyAuaTzjH9DQFye8sRqI9kyZT70fnw53pVE";

const authenticate = async (mode, data) => {
  try {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
    const res = await axios.post(url, { ...data, returnSecureToken: true });
    const token = res.data.idToken;
    return token;
  } catch (error) {
    const err = error.response.data.error.errors[0].message.replace(/_/g, " ");
    Alert.alert("Authentication failed", err);
  }
};

export const createUser = (data) => {
  return authenticate("signUp", data);
};

export const login = (data) => {
  return authenticate("signInWithPassword", data);
};
