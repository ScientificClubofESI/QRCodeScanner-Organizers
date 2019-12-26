import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {StyleSheet, View, TextInput, Image, Text} from 'react-native';

export default class UserInput extends Component {
  render() {
    return (
        <View style={styles.container}>
            <View style={{width: "35%"}}>
                <Text style={styles.title}>{this.props.title} :</Text>
            </View>
            <View style={{width: "65%", justifyContent: "center", alignItems: "flex-start"}}>
                <TextInput
                style={styles.input}
                placeholder={this.props.placeholder}
                autoCorrect={this.props.autoCorrect}
                autoCapitalize={this.props.autoCapitalize}
                returnKeyType={this.props.returnKeyType}
                placeholderTextColor="#00000080"
                underlineColorAndroid="transparent"
                keyboardType={this.props.keyboardType}
                
                />
            </View>
        </View>
    )
  }
};


const styles = StyleSheet.create({
    container:{
       borderBottomWidth: 1,
        borderBottomColor: "#A5206C",
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 15,
        marginRight: 15,
        marginLeft: 15,
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    title:{
        fontSize: 23
    },
    input: {
        marginLeft: 5,
        borderRadius: 20,
        color: '#000',
        fontSize: 16,
      },
});

