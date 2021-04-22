import { AppRegistry } from 'react-native';
import App from './App.js';
import Login from './js/screens/login';

/** Defaults */
// AppRegistry.registerComponent('APP_NAME_HERE', () => App);

// // The below line is necessary for use with the TestBed App
// AppRegistry.registerComponent('ViroSample', () => App);

AppRegistry.registerComponent('APP_NAME_HERE', () => Login);

AppRegistry.registerComponent('ViroSample', () => Login);
