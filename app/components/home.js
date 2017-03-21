var React = require('react-native');
var {
  View,
  Image,
  Text,
  TouchableHighlight,
  StyleSheet
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#765887',
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


class Home extends React.Component {
  render() {
    return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Home Page
      </Text>

      <TouchableHighlight style={styles.button} underlayColor="grey" onPress={()=>this.props.navigator.pop()}>
        <Text>
          Back
        </Text>
      </TouchableHighlight>
    </View>
    );
  }
};

module.exports = Home;
