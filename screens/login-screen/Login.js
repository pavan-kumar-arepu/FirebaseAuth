
// const Login = () => {
//   return (
//     <View>
//       <Text>Welcome to Login</Text>
//     </View>
//   )
// }

// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { auth } from '../firebase';
import style from './style';

function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      navigation.navigate('TodoList');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={style.container}>
      <TextInput
        style={style.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={style.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

export default Login