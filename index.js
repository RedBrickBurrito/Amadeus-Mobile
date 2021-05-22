import { AppRegistry } from 'react-native';
import App from './App.js';
import Signup from './js/screens/signup';
import {Provider} from 'react-redux';

import configureStore from './store';
import {name as appName} from './app.json';

const store = configureStore()

const RNRedux = () => (
    <Provider store = {store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent('APP_NAME_HERE', () => Signup);

// The below line is necessary for use with the TestBed App
AppRegistry.registerComponent('ViroSample', () => Signup);
AppRegistry.registerComponent(appName, () => RNRedux);