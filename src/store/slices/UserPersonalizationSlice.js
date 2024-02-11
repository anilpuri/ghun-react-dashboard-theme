import { createSlice } from "@reduxjs/toolkit";
import LocalStorageHelper from "../../helpers/LocalStorageHelper";
const initialState = {
  SelectedTheme: "pure-light",
};

const UserPersonalizationSlice = createSlice({
  name: "UserPersonalizationSlice",
  initialState,
  reducers: {
    UpdateSelectedTheme: (state, action) => {
      var { theme = null } = action?.payload ?? {};
      if (theme) {
        state.SelectedTheme = theme;
        LocalStorageHelper.setItem("selected-theme", theme);
      }
    },
    CheckStorageForPersonalization: (state) => {
      var selectedtheme = LocalStorageHelper.getItem("selected-theme");
      if (selectedtheme) {
        state.SelectedTheme = selectedtheme;
      }
    },
  },
});

export const { UpdateSelectedTheme, CheckStorageForPersonalization } =
  UserPersonalizationSlice.actions;
export default UserPersonalizationSlice.reducer;
