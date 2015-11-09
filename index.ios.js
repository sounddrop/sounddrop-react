/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var Button = require('react-native-button');
var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
} = React;


var SoundDrop = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          GREAT TO HAVE YOU HERE 
          AT SOUNDDROP
        </Text>
        <Image source={require('./sounddrop_logo.png')} style={styles.logo}/>
        <Button style={styles.button} onPress={this._handlePress}>
          CREATE
        </Button>
        <Button style={styles.button} onPress={this._handlePress}>
          LISTEN
        </Button>
      </View>
    );
  }
});



var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A0923',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFF',
    margin: 10,
  },
  button: {
    borderColor: '#696969',
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF8300',
    margin: 30,
  },
});

AppRegistry.registerComponent('SoundDrop', () => SoundDrop);
