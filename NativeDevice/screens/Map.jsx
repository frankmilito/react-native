import MapView, { Marker } from "react-native-maps";
import { Alert, StyleSheet, Text } from "react-native";
import {
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import IconButton from "../components/ui/IconButton";
import { MapContext } from "../store/context";

const Map = ({ navigation, route }) => {
  const mapCtx = useContext(MapContext);
  const initialLocation = route.params && {
    lat: route.params.initialLat,
    lng: route.params.initialLng,
  };

  const [selectedLocation, setSelectedLocation] = useState();
  const region = {
    latitude: initialLocation ? initialLocation.lat : 9.076479,
    longitude: initialLocation ? initialLocation.lng : 7.398574,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const selectLocation = (event) => {
    if (initialLocation) return;
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;

    setSelectedLocation({
      lat,
      lng,
    });
  };
  useEffect(() => {
    setSelectedLocation(initialLocation);
  }, [route, navigation]);
  const savePickedLocation = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert("No location picked", "You have to select a location");
      return;
    }
    mapCtx.addLocation(selectedLocation);
    navigation.navigate("AddPlace", {
      pickedLocation: selectedLocation,
    });
  }, [navigation, selectedLocation]);

  useLayoutEffect(() => {
    if (initialLocation) return;

    navigation.setOptions({
      headerRight: ({ tintColor }) => {
        return (
          <IconButton
            icon={"save"}
            size={24}
            color={tintColor}
            onPress={savePickedLocation}
          />
        );
      },
    });
  }, [navigation, savePickedLocation]);

  return (
    <MapView
      onPress={selectLocation}
      initialRegion={region}
      style={styles.container}
    >
      {selectedLocation && (
        <Marker
          title="Picked Location"
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        />
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
