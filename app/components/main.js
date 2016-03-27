var React = require('react-native');

var {
  View,
  Image,
  Text,
  StyleSheet
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    marginBottom: 5,
  },
});


class Main extends React.Component {
  render() {
    return (
    <View style={styles.container}>
        <Image source={require('SoundDrop/app/images/sounddrop_logo_name.png')} style={styles.logo}/>
        <Image source={require('SoundDrop/app/images/sounddrop_logo.png')} style={styles.icon}/>
        <Text style={styles.welcome}>
          Welcome to SoundDrop!
        </Text>
      </View>
    );
  }
};

module.exports = Main;
