import React from 'react';
import Login from '../screens/login';
import Signup from '../screens/signup';
import ViroNavigator from './viroNavigator';
import Setting from '../screens/settings';
import { NativeRouter, Route } from 'react-router-native';

export default function ReactNavigator() {
  return (
    <NativeRouter>
      <Route exact path={['/', '/settings']} component={Setting} />
      {/* <Route path="/login" component={Login} />
      <Route path="/viro" component={ViroNavigator} /> */}
    </NativeRouter>
  );
}
