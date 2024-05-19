import auth from '@react-native-firebase/auth'


export const createUser = async (fullName, email, password) => {
    try {
      const user = await auth().createUserWithEmailAndPassword(email, password);
      await user.user.updateProfile({displayName: fullName});
      console.log(user);
      return user;
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use')
        return {error: 'The email you entered is already in use.'};
      } else if (error.code === 'auth/invalid-email') {
        console.log('Entered email is invalid')
        return {error: 'Please enter a valid email address.'};
      }
      console.log(error)
      return {error: 'Something went wrong with your request.'};
    }
  };

  export const loginUser = async (email, password) => {
    try {
      const response = await auth().signInWithEmailAndPassword(email, password);
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
      const message = error
      if (error.code === 'auth/wrong-password') {
        console.log('Entered auth/wrong-password')
        return {status: false, error: 'Please enter a correct password'};
      } else if (error.code === 'auth/user-not-found') {
        console.log('Entered user-not-found')
        return {
          status: false,
          error:
            'The email you entered does not exist. Please create a new account.',
        };
      }
      console.log('Something went wrong')
      return {status: false, error: message};
    }
  };
  
  export const logOut = async () => {
    await auth().signOut();
  };
  

  