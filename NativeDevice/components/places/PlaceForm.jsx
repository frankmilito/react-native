import React, { useContext, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";
import Location from "./Location";
import Button from "../ui/Button";
import { MapContext } from "../../store/context";
import { useNavigation } from "@react-navigation/native";
import Place from "../../models/place";
import { insertPlace } from "../../util/database";

const PlaceForm = () => {
  const navigation = useNavigation();
  const mapCtx = useContext(MapContext);

  const [enteredTitle, setEnteredTitle] = useState("");
  const changeTitleHandler = (value) => {
    setEnteredTitle(value);
  };

  const savePlaceHandler = async () => {
    const place = new Place(
      enteredTitle,
      mapCtx.selectedImageStore,
      mapCtx.addressStore,
      mapCtx.locationStore
    );
    // console.log({
    //   imageURI: place.imageURI,
    //   title: place.title,
    //   address: place.address,
    //   lat: place.location.lat,
    //   lng: place.location.lng,
    // });
    console.log(place);
    await insertPlace({
      imageURI: place.imageURI,
      title: place.title,
      address: place.address,
      lat: place.location.lat,
      lng: place.location.lng,
    });
    navigation.navigate("AllPlaces");
  };
  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          onChangeText={changeTitleHandler}
          value={enteredTitle}
          style={styles.input}
        />
      </View>
      <ImagePicker />
      <Location />
      <Button onPress={savePlaceHandler}>Add Place</Button>
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary700,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderWidth: 2,
    backgroundColor: Colors.primary100,
  },
});
