var React = require('react-native');
var Main = require('SoundDrop/app/components/main');
var Home = require('SoundDrop/app/components/home');

window.React = React;

var {
  AppRegistry,
  StyleSheet,
	Navigator
} = React;

var SoundDrop = React.createClass({
  render: function() {
    return (
      <Navigator
        initialRoute={{ id: 'welcome'}}
        renderScene={this.navigatorRenderScene}
      />
    );
  },
  navigatorRenderScene: function(route, navigator) {
		switch (route.id) {
		  case 'welcome':
			   return (<Main navigator={navigator}/>);
		  case 'home':
			   return (<Home navigator={navigator}/>);
		}
	}
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A0923',
  }
});

AppRegistry.registerComponent('SoundDrop', () => SoundDrop);
