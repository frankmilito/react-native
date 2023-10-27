import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "./favorites";

export const store = configureStore({
  reducer: {
    favorites: favoriteSlice,
  },
});
