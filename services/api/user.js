import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import store from '../../redux/store';
import {updateToken} from '../../redux/reducers/User';
import Realm from 'realm';
import {LundryUser, Booking, Slot} from '../realm/schemas';

export const createUser = async (fullName, email, password) => {
  try {
    // Create user with Firebase Authentication
    const userCredential = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    const user = userCredential.user;

    // Get a realm instance
    const realm = await Realm.open({schema: [LundryUser, Booking, Slot]});

    // Start a write transaction
    realm.write(() => {
      const newUser = realm.create(LundryUser, {
        uid: user.uid,
        displayName: fullName,
        email: email,
        activeBookings: [], // Initialize empty list for bookings
      });
      console.log('User saved successfully in Realm:', newUser);
    });

    // Additional logic after successful registration

    return user;
  } catch (error) {
    console.log('Error during user creation:', error);
    // Handle registration errors
    return {error: 'Something went wrong with user registration.'};
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
