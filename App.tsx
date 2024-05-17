/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import AppNavigator from './navigation/AppNavigation';
import { NavigationContainer } from '@react-navigation/native';

import Login from './screens/login-screen/Login';
import Home from './screens/home-screen/Home';

function App() {
  return (
      <AppNavigator/>
  );
}

export default App;