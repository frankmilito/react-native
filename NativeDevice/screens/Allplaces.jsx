import { Text } from "react-native";
import PlaceList from "../components/places/PlaceList";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";

const Allplaces = ({ route }) => {
  const isFocused = useIsFocused();
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  useEffect(() => {
    if (isFocused && route.params) {
      setLoadedPlaces((curr) => [...curr, route.params.place]);
    }
  }, [isFocused, route]);
  return <PlaceList places={loadedPlaces} />;
};

export default Allplaces;
