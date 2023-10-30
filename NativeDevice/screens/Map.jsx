import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text } from "react-native";
import { useState } from "react";

const Map = () => {
  const [selectedLocation, setSelectedLocation] = useState();
  const region = {
    latitude: 9.076479,
    longitude: 7.398574,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const selectLocation = (event) => {
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;

    setSelectedLocation({
      lat,
      lng,
    });
  };
  console.log(selectedLocation, "selet");
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
