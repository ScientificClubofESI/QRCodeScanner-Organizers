import React, { Component } from "react";
import PropTypes from "prop-types";
import Dimensions from "Dimensions";
import login_background from "../assets/images/login_background.jpg"
import { StyleSheet, ImageBackground, View } from "react-native";


export default class Wallpaper extends Component {
  render() {
    return (
      <ImageBackground style={styles.background} source={login_background}>
        <View style={styles.picture}>
          {this.props.children}
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    width: '100%', 
    height: '100%'
  },
  picture: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: "rgba(141,40,101,0.85)",
  }
});
