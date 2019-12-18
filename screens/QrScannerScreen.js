import React from "react";
import { View, Text, StyleSheet, Modal } from "react-native";
import * as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner";
import { TouchableOpacity } from "react-native";
import { Overlay, Card } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";    
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
              isVisible = {this.state.modalVisible}>
            <View style={styles.scanAgainContainer}>
            <Text style={{alignSelf: "center"}}>
              Hacker OUCHAR had his {this.state.ScanningService}
            </Text>
            <Card
              title='Hacker Info'>
              <Text>
                Name : OUCHAR Abdelhak
              </Text>
              <Text>
                Phone : +213 55 55 55 55
              </Text>
              <Text>
                mail : ga_ouchar@esi.dz
              </Text>
              <Text>
                Age : 20 years old
              </Text>
            </Card>
              <LinearGradient
                colors={["#2a6bd1", "#4c65e1", "#735aeb", "#9c45ef", "#c512eb"]}
                start={{ x: 0, y: 0.75 }}
                end={{ x: 1, y: 0.25 }}
                style={{
                  padding: 10,
                  alignItems: "center",
                  margin: 10
                }}
              >
                <TouchableOpacity onPress={this._handleScanAgain}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <MaterialCommunityIcons
                      color="white"
                      name="qrcode-scan"
                      size={26}
                      style={styles.buttonIcon}
                    ></MaterialCommunityIcons>
                    <Text style={styles.text}>Scan Again</Text>
                  </View>
                </TouchableOpacity>
              </LinearGradient>
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
    justifyContent: "flex-end"
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
    justifyContent: "center"
  }
});
