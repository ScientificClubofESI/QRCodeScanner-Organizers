import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import QrScannerScreen from "../screens/QrScannerScreen";
import ServicesScreen from "../screens/ServicesScreen";
import HackerInfoScreen from "../screens/HackerInfoScreen";
const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const QrScannerStack = createStackNavigator(
  {
    QrScanner: QrScannerScreen
  },
  config
);

QrScannerStack.navigationOptions = {
  tabBarLabel: "QR Scanner",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-qr-scanner${focused ? "" : "-outline"}`
          : "md-qr-scanner"
      }
    />
  )
};

QrScannerStack.path = "";

const HackerInfoStack = createStackNavigator(
  {
    HackerInfo: HackerInfoScreen
  },
  config
);

HackerInfoStack.navigationOptions = {
  tabBarLabel: "Hacker Info",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle-outline"
      }
    />
  )
};

HackerInfoStack.path = "";

const ServicesStack = createStackNavigator(
  {
    Services: ServicesScreen
  },
  config
);

ServicesStack.navigationOptions = {
  tabBarLabel: "HackIT services",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? `ios-apps` : "md-apps"}
    />
  )
};

QrScannerStack.path = "";

const tabNavigator = createBottomTabNavigator({
  ServicesStack,
  HackerInfoStack
});

tabNavigator.path = "";

export default tabNavigator;
