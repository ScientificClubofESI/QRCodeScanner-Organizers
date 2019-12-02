import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import ServicesScreen from "../screens/ServicesScreen";
import QrScannerScreen from "../screens/QrScannerScreen";
const AppNavigator = createStackNavigator(
  {
    Services: ServicesScreen,
    QrScanner: QrScannerScreen
  },
  {
    initialRouteName: "Services"
  }
);
export default createAppContainer(AppNavigator);
