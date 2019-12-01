import React, { Component } from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { Card, Button } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Platform } from "react-native";
export default class Service extends Component {
  render() {
    return (
      <Card
        title={this.props.title}
        titleStyle={styles.titleStyle}
        image={this.props.image}
      >
        <Text>{this.props.description}</Text>
        <Button
          icon={
            <MaterialCommunityIcons
              color="white"
              name="qrcode-scan"
              size={26}
              style={styles.buttonIcon}
            ></MaterialCommunityIcons>
          }
          title="Scan QR"
        ></Button>
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
  buttonIcon: {
    marginRight: 5
  }
});
