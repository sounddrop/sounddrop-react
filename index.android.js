/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
  View,
} = React;

var UIExplorerButton = React.createClass({
  propTypes: {
    onPress: React.PropTypes.func,
  },
  render: function() {
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        style={styles.button}
        underlayColor="grey">
        <Text>
          Hi
        </Text>
      </TouchableHighlight>
    );
  },
});

var SoundDrop = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Image source={require('image!sounddrop_logo_name')} style={styles.logo}/>
        <Image source={require('image!sounddrop_logo')} style={styles.icon}/>
        <Text style={styles.welcome}>
          Welcome to SoundDrop!
        </Text>
        <UIExplorerButton/>
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
  icon: {
    marginTop: 50, 
    marginBottom: 60,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    margin: 10,
  },
  button: {
    borderColor: '#696969',
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d3d3d3',
  }
});

AppRegistry.registerComponent('SoundDrop', () => SoundDrop);
