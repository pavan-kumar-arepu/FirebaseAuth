import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/login-screen/Login'
import ShowTodoList from '../screens/todo-list-screen/ShowTodoList'
import AddTodo from '../screens/add-list-screen/AddTodo'
import {Routes} from './Routes'

const Stack = createNativeStackNavigator();

function AppNavigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" 
             screenOptions={{header: () => null, headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="AddTodo" component={AddTodo} />
          <Stack.Screen name="ShowTodoList" component={ShowTodoList} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default AppNavigator;