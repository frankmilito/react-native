import { Text } from "react-native";
import PlaceList from "../components/places/PlaceList";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { fetchPlaces } from "../util/database";

const Allplaces = ({ route }) => {
  const isFocused = useIsFocused();
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  useEffect(() => {
    async function loadPlaces() {
      const places = await fetchPlaces();
      setLoadedPlaces(places);
    }
    if (isFocused) {
      loadPlaces();
      // setLoadedPlaces((curr) => [...curr, route.params.place]);
    }
  }, [isFocused]);
  return <PlaceList places={loadedPlaces} />;
};

export default Allplaces;
