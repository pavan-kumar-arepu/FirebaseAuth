import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import globalStyle from '../../assets/styles/globalStyle'
import PropTypes from 'prop-types';
import Input from '../../components/Input/Input';
import style from './style';
import { useState } from 'react';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

import { useDispatch } from 'react-redux';
 

import { Pressable } from 'react-native';

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
            <Header type={8} title={'Welcome Back'} />
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
            {
            // <Button title={'Login'}/>
            <Button
            /*
              onPress={async () => {
                let user = await loginUser(email, password);
                if (!user.status) {
                  setError(user.error);
                } else {
                  setError('');
                  dispatch(logIn(user.data));
                //   navigation.navigate(Routes.Home);
                }
              }}*/
              title={'Login'}
              isDisabled={email.length < 5 || password.length < 8}
            /> }
          </View>
          <Pressable
            style={style.registrationButton}
            onPress={() => navigation.navigate('Registration')}>
            <Header color={'#156CF7'} type={3} title={"Don't have an account?"} />
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default Login;