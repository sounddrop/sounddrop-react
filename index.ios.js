var React = require('react-native');
var Main = require('SoundDrop/app/components/main');

window.React = React;

var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
} = React;

var SoundDrop = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'SoundDrop',
          component: Main,
        }}/>
    );    
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
}); 



AppRegistry.registerComponent('SoundDrop', () => SoundDrop);
