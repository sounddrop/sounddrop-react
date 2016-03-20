var React = require('react-native');

var {
  View,
  Text,
  StyleSheet
} = React;

var styles = StyleSheet.create({
  foo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
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
      <View style={styles.foo}>
        <Text style={styles.welcome}>
          Hello there!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
};

module.exports = Main;
