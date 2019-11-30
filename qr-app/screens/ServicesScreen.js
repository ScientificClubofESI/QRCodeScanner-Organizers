import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Service from "../components/Service";
import QrScannerScreen from "./QrScannerScreen";
export default class ServicesScreen extends React.Component {
  _openScanner = e => {};
  render() {
    return (
      <View style={styles.container}>
        <Button title="Open Scanner" onPress={this._openScanner}></Button>
      </View>
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
    alignItems: "center"
  }
});
