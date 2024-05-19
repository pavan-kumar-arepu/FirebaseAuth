import { View, Pressable, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react';

import globalStyle from '../../assets/styles/globalStyle'
import style from './style';

import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

import PropTypes from 'prop-types';

import { loginUser } from '../../api/user';
import { useDispatch } from 'react-redux';

const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    // const dispatch = useDispatch();
    return (
      <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={style.container}>
          <View style={globalStyle.marginBottom24}>
            <Header type={1} title={'Welcome Back'} />
          </View>
          <View style={globalStyle.marginBottom24}>
            <Input
              keyboardType={'email-address'}
              label={'Email'}
              placeholder={'Enter your email...'}
              onChangeText={value => setEmail(value)}
            />
          </View>
          <View style={globalStyle.marginBottom24}>
            <Input
              secureTextEntry={true}
              label={'Password'}
              placeholder={'******'}
              onChangeText={value => setPassword(value)}
            />
          </View>
          {error.length > 0 && <Text style={style.error}>{error}</Text>}
          <View style={globalStyle.marginBottom24}>
            <Button
              onPress={async () => {
                let user = await loginUser(email, password);
                if (!user.status) {
                  setError(user.error);
                } else {
                  setError('');
                  // dispatch(logIn(user.data));
                  navigation.navigate('Home');
                }
              }}
              title={'Login'}
              isDisabled={email.length < 5 || password.length < 8}
            />
          </View>
          <Pressable
            style={style.registrationButton}
            onPress={() => navigation.navigate('Registration')}>
            <Header type={3} title={"Don't have an account?"} />
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default Login;