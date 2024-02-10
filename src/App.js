import { useEffect, useState } from "react";
import LocalStorageHelper from "./helpers/LocalStorageHelper";
import {
  UpdateSelectedTheme,
  CheckStorageForPersonalization,
} from "./store/slices/UserPersonalizationSlice";
import { useDispatch, useSelector } from "react-redux";
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
    <div app-theme={SelectedTheme} className="app">
      <button
        onClick={() => {
          updateThemeHandler("dark-purple");
        }}
      >
        dark-purple
      </button>
      <button
        onClick={() => {
          updateThemeHandler("dark-green");
        }}
      >
        dark-green
      </button>
      <button
        onClick={() => {
          updateThemeHandler("dark-orange");
        }}
      >
        dark-orange
      </button>
      <button
        onClick={() => {
          updateThemeHandler("pure-dark");
        }}
      >
        pure-dark
      </button>
      <button
        onClick={() => {
          updateThemeHandler("pure-light");
        }}
      >
        pure-light
      </button>
      <button
        onClick={() => {
          updateThemeHandler("light-purple");
        }}
      >
        light-purple
      </button>
      <button
        onClick={() => {
          updateThemeHandler("light-green");
        }}
      >
        light-green
      </button>
      <button
        onClick={() => {
          updateThemeHandler("light-orange");
        }}
      >
        light-orange
      </button>
      <p>Hello this is test</p>
    </div>
  );
}

export default App;
