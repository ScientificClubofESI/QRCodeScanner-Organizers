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
      <Wallpaper>
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
            <CustomInput title="Name" placeholder="Example" keyboardType="default"/>
            <CustomInput title="Phone" placeholder="+21300000000" keyboardType="phone-pad"/>
            <CustomInput title="Mail" placeholder="example@mail.com" keyboardType="email-address"/>
            <CustomInput title="Age" placeholder="20" keyboardType="numeric"/>
          </View>

          <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 20, marginBottom: 30}}>
            <ToggleSwitch
            text={{on: "Had his lunch", off: "Didn't have lunch", activeTextColor: 'white', inactiveTextColor: 'white'}}
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
            onPress={this._onPress}>
              <Text style={styles.text}>Done</Text>
            </TouchableOpacity>
          </LinearGradient>

          </Card>
        </View>
       
        
      </Wallpaper>
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
  },
  devider: {
    backgroundColor: '#000',
    height: 3,
    borderRadius: 10,
    alignSelf: "center",
    width: "60%"
  },
  cardStyle:{
    height: "75%",
    width: "85%",
    alignItems: "stretch",
    justifyContent: "center"
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
