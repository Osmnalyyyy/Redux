import { createSlice } from "@reduxjs/toolkit";

export const themeSlices = createSlice({
  name: "theme",
  initialState: {
    darkMode: false,
  },
  reducers: {
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

export const { setDarkMode } = themeSlices.actions;
export default themeSlices.reducer;
