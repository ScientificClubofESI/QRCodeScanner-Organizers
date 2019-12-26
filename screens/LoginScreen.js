import React, { Component } from "react";
import PropTypes from "prop-types";
import Logo from "../components/Logo";
import Form from "../components/Form";
import Wallpaper from "../components/Wallpaper";
import ButtonSubmit from "../components/ButtonSubmit";

export default class LoginScreen extends Component {
  _onPress = ()=>{
    this.props.navigation.navigate("Services");
  }
  render() {
    return (
      <Wallpaper>
        <Logo />
        <Form />
        <ButtonSubmit text="Login" onPress={this._onPress} navigation={this.props.navigation} />
      </Wallpaper>
    );
  }
}
LoginScreen.navigationOptions = {
  headerStyle: {
    display: "none"
  }
};
