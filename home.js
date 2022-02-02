import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';

export default class home extends Component {
  render() {
    return (

      <View style={styles.container}>
        <ImageBackground source={{uri:'https://www.queensu.ca/gazette/sites/default/files/assets/TW%20Smith%20Insight%20Coronavirus%20and%20economy.jpg'}}
        style={{width:'100%',height:'100%'}}>
          <StatusBar style="auto" />
          <View style={{justifyContent:'center',alignItems:'center',alignContent:'center'}}>
          <Text style={styles.text}>Welcome to COVID19 App</Text>
          <View style={styles.BUTTON}>
          <Button title="SHOW LIVE WORLD DATA" color='#000' onPress={() => this.props.navigation.navigate('Covid')}></Button>
          </View>
          </View>
        </ImageBackground>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    justifyContent:'center',
    
  },
  text: {
    fontSize: 70,
    marginTop:120,
    margin: 15,
    textAlign: 'center',

  },
  BUTTON: {
    
    width:300,
    margin:95,
  
  },
});
  