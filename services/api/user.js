import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import store from '../../redux/store';
import {updateToken} from '../../redux/reducers/User';
import UserRepository from '../realm/UserRepository';

export const createUser = async (fullName, email, password) => {
  try {
    // Create user with Firebase Authentication
    const userCredential = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    const user = userCredential.user;
    console.log('Created successfully Before writing to local Realm');

    /*
    // Add user details to Firestore
    await firestore().collection('users').doc(user.uid).set({
      displayName: fullName,
      email: email,
      activeBookings: null,
    });
    */

    // Add user details to local Realm database
    UserRepository.addUser({
      uid: user.uid,
      displayName: fullName,
      email: email,
      activeBookings: [],
    });

    console.log('Created successfully After writing to local Realm');
    return user;
  } catch (error) {
    console.log('Error during user creation or Firestore write:', error);
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use');
      return {error: 'The email you entered is already in use.'};
    } else if (error.code === 'auth/invalid-email') {
      console.log('Entered email is invalid');
      return {error: 'Please enter a valid email address.'};
    } else if (error.code === 'firestore/permission-denied') {
      console.log('Permission denied for Firestore write');
      return {error: 'You do not have permission to write to Firestore.'};
    }
    console.log('Unhandled error:', error);
    return {error: 'Something went wrong with your request.'};
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    console.log('Token got updated!');
    const token = await response.user.getIdToken();
    console.log(response);
    return {
      status: true,
      data: {
        displayName: response.user.displayName,
        email: response.user.email,
        token,
      },
    };
  } catch (error) {
    console.log(error);
    const message = error;
    if (error.code === 'auth/wrong-password') {
      console.log('Entered auth/wrong-password');
      return {status: false, error: 'Please enter a correct password'};
    } else if (error.code === 'auth/user-not-found') {
      console.log('Entered user-not-found');
      return {
        status: false,
        error:
          'The email you entered does not exist. Please create a new account.',
      };
    }
    console.log('Something went wrong');
    return {status: false, error: message};
  }
};

export const logOut = async () => {
  await auth().signOut();
};

export const checkToken = async () => {
  try {
    let response = await auth().currentUser.getIdToken(true);
    console.log(response);
    store.dispatch(updateToken(response));
    return response;
  } catch (error) {
    return error;
  }
};
