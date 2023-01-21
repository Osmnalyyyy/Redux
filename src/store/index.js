import { configureStore } from "@reduxjs/toolkit";
import themeSlices from "./slices/theme-slice";
import localeSlice from "./slices/locale-slice";

export default configureStore({
  reducer: {
    theme: themeSlices,
    locale: localeSlice,
  },
});
