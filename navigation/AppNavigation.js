import React from 'react'
import Login from '../screens/login-screen/Login'
import ShowTodoList from '../screens/todo-list-screen/ShowTodoList'
import AddTodo from '../screens/add-list-screen/AddTodo'
import Registration from '../screens/registration-screen/Registration'
import Home from '../screens/home-screen/Home'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator();

function AppNavigator() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'
           screenOptions={{header: () => null, headerShown: false}}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Registration' component={Registration} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='AddTodo' component={AddTodo} />
        <Stack.Screen name='ShowTodoList' component={ShowTodoList} />
      </Stack.Navigator>
    </NavigationContainer> 
  );
}

export default AppNavigator;