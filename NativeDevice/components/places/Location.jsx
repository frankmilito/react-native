import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Alert, Image, Text } from "react-native";
import OutlinedButton from "../ui/OutlinedButton";
import { Colors } from "../../constants/colors";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";
import { getAddress, getMapPreview } from "../../util/location";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MapContext } from "../../store/context";

const Location = () => {
  const mapCtx = useContext(MapContext);
  const route = useRoute();
  const navigation = useNavigation();
  const [locationPermission, requestPermissions] = useForegroundPermissions();
  const [pickedLocation, setPickedLocation] = useState();
  const mapLocation = route.params?.pickedLocation;

  useEffect(() => {
    setPickedLocation(mapLocation);
  }, [route]);
  const verifyPermissions = async () => {
    if (locationPermission.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermissions();
      return permissionResponse.granted;
    }
    if (locationPermission.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient permissions",
        "You need to grant permission to use this application"
      );
      return false;
    }
    return true;
  };

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const location = await getCurrentPositionAsync();
    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
    mapCtx.addLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });

    const address = await getAddress({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
    mapCtx.addressHandler(address);
  };

  const pickOnMapHandler = async () => {
    const location = await getCurrentPositionAsync();

    const address = await getAddress({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
    mapCtx.addressHandler(address);
    navigation.navigate("Map");
  };

  let locationPreview = <Text>No location picked yet...</Text>;
  if (pickedLocation) {
    locationPreview = (
      <Image
        source={{ uri: getMapPreview(pickedLocation.lng, pickedLocation.lat) }}
        style={styles.image}
      />
    );
  }

  return (
    <View>
      <View style={styles.mapPreview}>{locationPreview}</View>
      <View style={styles.actions}>
        <OutlinedButton icon={"location"} onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icon={"map"} onPress={pickOnMapHandler}>
          Pick on map
        </OutlinedButton>
      </View>
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 4,
  },
});
