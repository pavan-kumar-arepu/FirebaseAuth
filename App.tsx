/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import RootNavigation from './navigation/RootNavigation';
import {NavigationContainer} from '@react-navigation/native';
// Importing the Provider component from the React Redux library
// The Provider component is a higher-order component that provides the Redux store to all components in the app
import {Provider} from 'react-redux';
import store from './redux/store';
import {persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  // Rendering the App component with a Provider and NavigationContainer component
  // We're passing in the store prop to the Provider component, making the store available to all child components
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
