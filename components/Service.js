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
        borderRadius={20}
        dividerStyle={styles.devider}
      >
        <Text>{this.props.description}</Text>
        <LinearGradient
          colors={["#A5206C", "#99206A", "#831F66", "#741F63", "#651F60"]}
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
              this.props.navigation.navigate("HackerInfo", {
                ScanningService: this.props.title
              })
            }
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={styles.buttonIcon}>
                <MaterialCommunityIcons
                  color="black"
                  name="qrcode-scan"
                  size={26}
                ></MaterialCommunityIcons>
              </View>
              <Text style={styles.text}>Scan Qr Code</Text>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </Card>
     
    );
  }
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
  },
  devider: {
    backgroundColor: '#000',
    height: 3,
    borderRadius: 10,
    alignSelf: "center",
    width: "30%"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: "50%"
  },
  buttonIcon: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 5
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontFamily: "Ubuntu-Medium",
    fontSize: 15
  }
});
