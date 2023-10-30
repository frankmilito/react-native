import React, { useState } from "react";
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { Colors } from "../../constants/colors";
import OutlinedButton from "../ui/OutlinedButton";

const ImagePicker = () => {
  const [cameraPermissionInfo, requestPermission] = useCameraPermissions();
  const [pickedImage, setPickedImage] = useState();
  const verifyPermission = async () => {
    if (cameraPermissionInfo.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }
    if (cameraPermissionInfo.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient permissions",
        "You need to grant permission to use this app"
      );
      return false;
    }
    return true;
  };

  const onHandlePress = async () => {
    const hasPermission = await verifyPermission();
    if (!hasPermission) {
      console.log("no permission to use this app");
      return;
    }
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspects: [16, 9],
      quality: 0.5,
    });

    setPickedImage(image.assets[0].uri);
  };
  let imagePreview = (
    <Text style={styles.imageText}>No image taken yet...</Text>
  );
  if (pickedImage) {
    imagePreview = <Image source={{ uri: pickedImage }} style={styles.image} />;
  }
  return (
    <View>
      <View style={styles.imageContainer}>{imagePreview}</View>
      {/* <Button title="Take image" onPress={onHandlePress} /> */}
      <OutlinedButton icon="camera" onPress={onHandlePress}>
        Take Image
      </OutlinedButton>
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  imageText: {
    color: "white",
    textAlign: "center",
  },
  imageContainer: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
