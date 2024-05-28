// Importing the createSlice function from the Redux Toolkit
import {createSlice} from '@reduxjs/toolkit';

// Defining the initial state for the user slice of the store
const initialState = {
  isLoggedIn: false,
  profileImage:
    // 'https://www.google.com/imgres?imgurl=https://media.licdn.com/dms/image/D4D03AQEV1noqc7yaqQ/profile-displayphoto-shrink_800_800/0/1711914106547?e%3D2147483647%26v%3Dbeta%26t%3DSj4Kdo3HT6LpLihvtyfMawOlzJZVTu_FN4LAYsWpI74&tbnid=gOcWNSDnCQW-MM&vet=1&imgrefurl=https://se.linkedin.com/in/pavan-kumar-arepu-software-architect-engineer&docid=OIpQq2GujkCGzM&w=800&h=800&source=sh/x/im/m1/1&kgs=1c915756f256a201&shem=abme,trie',
    'https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top',
};

// Creating a new slice of the store named "user" with its own set of reducers
export const User = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    logIn: (state, action) => {
      return {...state, ...{isLoggedIn: true}, ...action.payload};
    },
    resetToInitialState: () => {
      return initialState;
    },
    updateToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

// Exporting the reducers here from the "User" slice
// makes them available to other parts of the app that want to use it
export const {logIn, resetToInitialState, updateToken} = User.actions;
export default User.reducer;
