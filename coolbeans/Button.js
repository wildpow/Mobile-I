import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Header = () => {
  return (
    <View style={buttonContainer}>
      <TouchableOpacity onPress={() => alert('Pressed')} style={button}>
        <Text style={buttonText} >Title</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('Pressed')} style={button}>
        <Text style={buttonText} >Title</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('Pressed')} style={button}>
        <Text style={buttonText} >Title</Text>
      </TouchableOpacity>
    </View>
  )
}

const stlyes = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: 'red',
    borderWidth: 1
  },
  button: {
    height: 30,
    width: 90,
    borderWidth: 1,
    borderColor: 'blue',
    justifyContent: 'center'
  },
  buttonText: {
    textAlign: 'center'
  }
})
const { buttonContainer, button, buttonText} = styles
export default Header;
