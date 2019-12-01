import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  SafeAreaView
} from "react-native";
import Service from "../components/Service";
import QrScannerScreen from "./QrScannerScreen";
import Constants from "expo-constants";
export default class ServicesScreen extends React.Component {
  _openScanner = e => {};
  render() {
    return (
      <SafeAreaView style={styles.topContainer}>
        <ScrollView
          contentContainerStyle={styles.container}
          scrollEnabled={true}
        >
          <Service title="Test Service"></Service>
          <Service title="Test Service"></Service>
          <Service title="Test Service"></Service>
          <Service title="Test Service"></Service>
          <Service title="Test Service"></Service>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

ServicesScreen.navigationOptions = {
  title: "HackIT Services"
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch"
  },
  topContainer: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  }
});
