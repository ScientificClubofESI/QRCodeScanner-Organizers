import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Card } from "react-native-elements";
import ButtonSubmit from "../components/ButtonSubmit";
import Wallpaper from "../components/Wallpaper";
import { LinearGradient } from "expo-linear-gradient";
import CustomInput from "../components/CustomInput"
import ToggleSwitch from "rn-toggle-switch"

export default class HackerInfoScreen extends Component {
  constructor() {
    super();
    this.state = {
      toggleActivated: false
    }
  }

  _onPress(){

  }

  render() {
    return (
      
        <View style={styles.container}>
          <Card 
          title="Hacker Info"
          image={this.props.image}
          borderRadius={20}
          titleStyle={styles.titleStyle}
          dividerStyle={styles.devider}
          containerStyle={styles.cardStyle}>

          <View
          style={{justifyContent: "space-between"}}
          >
            <CustomInput title="Name" value="OUCHAR Abdelhak"/>
            <CustomInput title="Phone" value="+213 55 55 55 55"/>
            <CustomInput title="Mail" value="ga_ouchar@esi.dz"/>
            <CustomInput title="Age" value="20 years old"/>
          </View>

          <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 20, marginBottom: 30}}>
            <ToggleSwitch
            text={{on: "Had his "+this.props.service, off: "Didn't have "+this.props.service, activeTextColor: 'white', inactiveTextColor: 'white'}}
            textStyle={{fontWeight: 'bold'}}
            color={{ indicator: 'white', active: 'rgba(32, 193, 173, 1)', inactive:  '#f00', activeBorder: 'rgba(32, 193, 173, 1)', inactiveBorder: '#f00'}}
            active={this.state.toggleActivated}
            disabled={false}
            width={120}
            radius={25}
            onValueChange={() => {this.setState({toggleActivated: !this.state.toggleActivated})}}
            />
        </View>

          <LinearGradient
          colors={["#A5206C", "#99206A", "#831F66", "#741F63", "#651F60"]}
          start={{ x: 0, y: 0.75 }}
          end={{ x: 1, y: 0.25 }}
          style={{
            padding: 10,
            alignItems: "center",
            borderRadius: 20,
          }}>
            <TouchableOpacity
            style={styles.button}
            onPress={this.props.onPress}>
              <Text style={styles.text}>Done</Text>
            </TouchableOpacity>
          </LinearGradient>

          </Card>
        </View>
       
    );
  }
}

HackerInfoScreen.navigationOptions = {
  title: "Hacker Info",
  header: null
};


const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000000"
  },
  devider: {
    backgroundColor: '#000',
    height: 3,
    borderRadius: 10,
    alignSelf: "center",
    width: "60%"
  },
  cardStyle:{
    width: "100%",
    height: "100%",
    alignItems: "stretch",
    justifyContent: "center",
    borderColor: "white",
    borderWidth: 0,
    elevation: 0
  },
  titleStyle: {
    fontSize: 25,
    
  },
  button: {
    width: "60%",
    height: 30,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontFamily: "Ubuntu-Medium",
    fontSize: 21,
    textAlign: "center"
  }

});
