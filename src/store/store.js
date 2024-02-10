import { configureStore } from "@reduxjs/toolkit";
import UserPersonalizationSlice from "./slices/UserPersonalizationSlice";
const store = configureStore({
  reducer: {
    UserPersonalizationReducer: UserPersonalizationSlice,
  },
});
export default store;
