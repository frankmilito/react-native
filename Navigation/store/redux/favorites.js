import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorites: (state, action) => {
      console.log(action.payload, "action");
      state.ids.push(action.payload);
    },
    removeFavorites: (state, action) => {
      //   const filtered = state.ids.filter((id) => id !== action.payload);
      //   state.ids = filtered;
      //   state.ids.filter((id) => id !== action.payload);
      state.ids.splice(state.ids.indexOf(action.payload), 1);
    },
  },
});

export default favoriteSlice.reducer;
export const { addFavorites, removeFavorites } = favoriteSlice.actions;
