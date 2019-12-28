import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {StyleSheet, View, TextInput, Image, Text} from 'react-native';

export default class UserInput extends Component {
  render() {
    return (
        <View style={styles.container}> 
            <Text style={styles.title}>{this.props.title} :</Text>
            <Text style={styles.input}>{this.props.value}</Text>
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
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    title:{
        fontSize: 23
    },
    input: {
        color: '#000',
        fontSize: 16,
        marginLeft: 5,
    },
    
});

