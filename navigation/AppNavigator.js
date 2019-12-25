import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import ServicesScreen from "../screens/ServicesScreen";
import QrScannerScreen from "../screens/QrScannerScreen";
import LoginScreen from "../screens/LoginScreen";
import HackerInfoScreen from "../screens/HackerInfoScreen"
const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Services: ServicesScreen,
    QrScanner: QrScannerScreen,
    HackerInfo: HackerInfoScreen
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#6F255F',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: 'white'
      },
    },
  },
  
);
export default createAppContainer(AppNavigator);
