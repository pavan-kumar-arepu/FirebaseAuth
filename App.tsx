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

function App() {
  return (
    // <Text> Hello </Text>
    <Login/>
      // <AppNavigator/>
  );
}

export default App;


/*
import React from 'react';
import AppNavigator from './navigation/AppNavigation';
import Login from './screens/login-screen/Login';

export default function App() {
  return 
  <AppNavigator />
  // <Login />
}*/