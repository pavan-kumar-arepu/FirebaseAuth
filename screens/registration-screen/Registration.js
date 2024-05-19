import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import style from './style';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import BackButton from '../../components/BackButton/BackButton';


import globalStyle from '../../assets/styles/globalStyle'
import PropTypes from 'prop-types';

const Registration = ({navigation}) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
          <View style={style.backButton}>
            <BackButton onPress={() => navigation.goBack()} />
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={style.container}>
            <View style={globalStyle.marginBottom24}>
              <Header type={1} title={'Hello and Welcome!'} />
            </View>
          <View style={globalStyle.marginBottom24}>
          <Input
            label={'First & Last Name'}
            placeholder={'Enter your full name...'}
            onChangeText={value => setFullName(value)}
          />
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
          {success.length > 0 && <Text style={style.success}>{success}</Text>}

          <View style={globalStyle.marginBottom24}>
            {
             <Button
             isDisabled={
                fullName.length <= 2 || email.length <= 5 || password.length < 8
              }
              title={'Registration'}
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
            /> }
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default Registration;