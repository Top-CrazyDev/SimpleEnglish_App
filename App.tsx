import { View, Text } from "react-native";
import React from "react";
import RootNavigator from "./src/navigator";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
      <Toast />
    </Provider>
  );
}
