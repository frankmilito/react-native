import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import OutlinedButton from "../components/ui/OutlinedButton";
import { Colors } from "../constants/colors";
import { fetchPlaceDetail } from "../util/database";

const PlacesDetails = ({ route, navigation }) => {
  const placeID = route.params.placeId;
  const [placeDetails, setPlaceDetails] = useState();

  useEffect(() => {
    async function fetchDetail(placeID) {
      const place = await fetchPlaceDetail(placeID);
      setPlaceDetails(place);
    }
    fetchDetail(placeID);
  }, [placeID]);

  useEffect(() => {
    navigation.setOptions({
      title: placeDetails?.title,
    });
  }, [placeDetails]);

  function showOnMapHandler() {
    navigation.navigate("Map", {
      initialLat: placeDetails.lat,
      initialLng: placeDetails.lng,
    });
  }

  if (!placeDetails) {
    return (
      <View style={styles.fallback}>
        <Text>Loading place details...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <Image
        style={styles.image}
        source={{ uri: placeDetails?.imageURI || placeDetails.imageUri }}
      />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{placeDetails?.address}</Text>
        </View>
        <OutlinedButton icon={"map"} onPress={showOnMapHandler}>
          View on Map
        </OutlinedButton>
      </View>
    </ScrollView>
  );
};

export default PlacesDetails;

const styles = StyleSheet.create({
  fallback: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  screen: {
    alignItems: "center",
  },
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
  },
  locationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
