import React, { Component } from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
export default class Service extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Service</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
