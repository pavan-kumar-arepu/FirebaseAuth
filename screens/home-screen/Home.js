import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Tab from '../../components/Tab/Tab';
import style from '../login-screen/style';
import {useDispatch, useSelector} from 'react-redux';

const Home = ({navigation}) => {
  // Using the useSelector hook to select the "user" slice of the store
  // This will return the user object containing firstName, lastName and userId fields
  const user = useSelector(state => state.user);

  // Using the useDispatch hook to get a reference to the dispatch function
  // This function allows us to dispatch actions to update the store
  const dispatch = useDispatch();

  console.log(user);

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.header}>
          <View>
            <Text style={style.headerIntroText}>Hello, </Text>
            <View style={style.username}>
              <Header title={user.displayName + ' 👋'} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
