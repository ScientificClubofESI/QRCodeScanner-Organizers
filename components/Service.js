import React, { Component } from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { Card } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
export default class Service extends Component {
  render() {
    return (
      <Card
        title={this.props.title}
        titleStyle={styles.titleStyle}
        image={this.props.image}
      >
        <Text>{this.props.description}</Text>
        <LinearGradient
          colors={["#2a6bd1", "#4c65e1", "#735aeb", "#9c45ef", "#c512eb"]}
          start={{ x: 0, y: 0.75 }}
          end={{ x: 1, y: 0.25 }}
          style={{
            padding: 10,
            alignItems: "center",
            borderRadius: 20
          }}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={e =>
              this.props.navigation.navigate("QrScanner", {
                ScanningService: this.props.title
              })
            }
          >
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
              <Text style={styles.text}>QR Scanner</Text>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: "50%"
  },
  buttonIcon: {
    marginRight: 5
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontFamily: "Ubuntu-Medium",
    fontSize: 15
  }
});
