import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import style from './style';
import {useDispatch, useSelector} from 'react-redux';
import {logOut} from '../../services/api/user';
import {resetToInitialState} from '../../redux/reducers/User';

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
            <Text style={style.headerIntroText}>Welcome, </Text>
            <View style={style.username}>
              <Header title={user.displayName + ' 👋'} />
            </View>
          </View>
          <View>
            <Image
              source={{uri: user.profileImage}}
              style={style.profileImage}
              resizeMode={'cover'}
            />
            <Pressable
              onPress={async () => {
                dispatch(resetToInitialState());
                await logOut();
              }}>
              <Header type={3} title={'Logout'} color={'#156CF7'} />
            </Pressable>
          </View>
        </View>
        <View style={style.box}>
          <Text></Text>
        </View>
        <Pressable style={style.highlightedImageContainer}>
          <Image
            style={style.highlightedImage}
            source={require('../../assets/images/laundry-app.png')}
            resizeMode={'cover'}
          />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
