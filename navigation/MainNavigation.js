import React from 'react';
import Login from '../screens/login-screen/Login';
import ShowTodoList from '../screens/todo-list-screen/ShowTodoList';
import AddTodo from '../screens/add-list-screen/AddTodo';
import Registration from '../screens/registration-screen/Registration';
import Home from '../screens/home-screen/Home';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export const NonAuthenticated = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registration" component={Registration} />
    </Stack.Navigator>
  );
};

export const Authenticated = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
