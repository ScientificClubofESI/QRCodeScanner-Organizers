import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import ServicesScreen from "../screens/ServicesScreen";
import QrScannerScreen from "../screens/QrScannerScreen";
import LoginScreen from "../screens/LoginScreen";
const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Services: ServicesScreen,
    QrScanner: QrScannerScreen
  },
  {
    initialRouteName: "Login"
  }
);
export default createAppContainer(AppNavigator);
