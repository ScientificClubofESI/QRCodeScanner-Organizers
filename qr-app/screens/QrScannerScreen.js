import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import * as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner";
export default class QrScannerScreen extends React.Component {
  state = {
    hasCameraPermissions: null,
    scanned: false,
    scannedData: null,
    ScanningService: ""
  };
  async componentDidMount() {
    this.getPermissionsAsync();
  }
  async getPermissionsAsync() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermissions: status == "granted" });
  }
  render() {
    const { hasCameraPermissions, scanned } = this.state;
    if (hasCameraPermissions === null) {
      return (
        <View>
          <Text>Requesting for camera permissions</Text>
        </View>
      );
    }
    if (hasCameraPermissions === false) {
      return (
        <View>
          <Text>No Access to Camera , Can't use Scanner</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        ></BarCodeScanner>
        {scanned && (
          <Button
            title={"Tap to Scan Again"}
            onPress={() => this.setState({ scanned: false })}
          ></Button>
        )}
      </View>
    );
  }
  handleBarCodeScanned = ({ type, data }) => {
    this.setState({
      scanned: true,
      scannedData: {
        type: type,
        data: data
      }
    });
    alert(`Bar code with type ${type} and data : ${data} has been scanned!`);
  };
  cancelScanning = e => {
    console.log("Scanning Canceled");
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end"
  }
});
