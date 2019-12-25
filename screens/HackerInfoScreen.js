import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Card } from "react-native-elements";
import ButtonSubmit from "../components/ButtonSubmit";
import Wallpaper from "../components/Wallpaper";

export default class HackerInfoScreen extends Component {

  _onPress(){

  }

  render() {
    return (
      <Wallpaper>
        <Card 
        title="Hacker Info"
        image={this.props.image}
        borderRadius={20}
        dividerStyle={styles.devider}>
          
        


        </Card>
        
      </Wallpaper>
    );
  }
}

HackerInfoScreen.navigationOptions = {
  title: "Hacker Info",
  header: null
};


const styles = StyleSheet.create({
  devider: {
    backgroundColor: '#000',
    height: 3,
    borderRadius: 10,
    alignSelf: "center",
    width: "30%"
  }
});
