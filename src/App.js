import { useEffect, useState } from "react";
import {
  UpdateSelectedTheme,
  CheckStorageForPersonalization,
} from "./store/slices/UserPersonalizationSlice";
import { useDispatch, useSelector } from "react-redux";
import Dashboard from "./components/layouts/Dashboard";
import styles from "./App.module.css";
function App() {
  const dispatch = useDispatch();
  const { SelectedTheme } = useSelector(
    (state) => state.UserPersonalizationReducer
  );
  const updateThemeHandler = (theme) => {
    dispatch(UpdateSelectedTheme({ theme: theme }));
  };
  useEffect(() => {
    dispatch(CheckStorageForPersonalization());
  }, []);
  return (
    <div app-theme={SelectedTheme} className={styles.app}>
      <Dashboard />
    </div>
  );
}

export default App;
