import React from "react";
import { View, Text, StyleSheet, Modal } from "react-native";
import * as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner";
import { TouchableOpacity } from "react-native";
import { Overlay, Card } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";  
import HackerInforScreen from "./HackerInfoScreen"  
export default class QrScannerScreen extends React.Component {
  state = {
    hasCameraPermissions: null,
    scanned: false,
    scannedData: null,
    ScanningService: "",
    modalVisible : false
  };
  static navigationOptions = ({ navigation }) => {
    return {
      title: `QR Scanner ${navigation.getParam("ScanningService", "")}`
    };
  };

  setModalVisible(){
    console.log("modal touched")
    this.setState({modalVisible: !this.state.modalVisible})
  }

  async componentDidMount() {
    this.setState({
      ScanningService: this.props.navigation.getParam("ScanningService", "")
    });
    this.getPermissionsAsync();
  }
  componentWillUnmount() {
    this.setState({
      hasCameraPermissions: null,
      scanned: false,
      scannedData: null,
      ScanningService: ""
    });
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
            <Overlay
              isVisible = {this.state.modalVisible}
              overlayStyle= {styles.overlay}
              width= "85%">
              
              <View style={styles.scanAgainContainer}>
                <HackerInforScreen 
                onPress={this._handleScanAgain}
                service={this.state.ScanningService}
                />
             
              </View>
            
            </Overlay>
            
        )}
      </View>
      

    );
  }
  _handleScanAgain = e => {
    this.setState({ scanned: false, scannedData: null });
  };
  handleBarCodeScanned = ({ type, data }) => {
    this.setState({
      scanned: true,
      scannedData: {
        type: type,
        data: data,
      },
      modalVisible: true
    });
    console.log(this.state);

    //alert(`Bar code with type ${type} and data : ${data} has been scanned!`);
  };
  cancelScanning = e => {
    console.log("Scanning Canceled");
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    backgroundColor: "#00000000"
  },
  buttonIcon: {
    marginRight: 5
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontFamily: "Ubuntu-Medium",
    fontSize: 15
  },
  scanAgainContainer: {
    flexDirection: "column",
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#00000000"
  },
  overlay:{
    backgroundColor: "#fff",
    borderRadius: 20,
  }
});
