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


class Main extends React.Component {
  render() {
    return (
    <View style={styles.container}>
      <Image source={require('SoundDrop/app/images/sounddrop_logo_name.png')} style={styles.logo}/>
      <Image source={require('SoundDrop/app/images/sounddrop_logo.png')} style={styles.icon}/>
      <Text style={styles.welcome}>
        Welcome to SoundDrop!
      </Text>
      <TouchableHighlight style={styles.button} underlayColor="grey" onPress={()=>this.props.navigator.push({id:'home'})}>
        <Text>
          View Drops
        </Text>
      </TouchableHighlight>
    </View>
    );
  }
};

module.exports = Main;
