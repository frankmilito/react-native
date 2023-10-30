import { createContext, useState } from "react";

export const MapContext = createContext({
  locationStore: {},
  selectedImageStore: "",
  addressStore: "",
  setAddress: (address) => {},
  selectedImageHandler: (img) => {},
  addLocation: (location) => {},
});

const MapProvider = ({ children }) => {
  const [locationStore, setLocationStore] = useState();
  const [selectedImageStore, setImageStore] = useState();
  const [addressStore, setAddressStore] = useState();

  const selectedImageHandler = (val) => {
    setImageStore(val);
  };
  const addLocation = (val) => {
    setLocationStore(val);
  };
  const addressHandler = (val) => {
    setAddressStore(val);
  };

  const values = {
    locationStore,
    selectedImageStore,
    addressStore,
    addressHandler,
    selectedImageHandler,
    addLocation,
  };
  return <MapContext.Provider value={values}>{children}</MapContext.Provider>;
};

export default MapProvider;
