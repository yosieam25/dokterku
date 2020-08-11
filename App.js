import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/Router';
import FlassMessage from 'react-native-flash-message';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <FlassMessage position="top" />
    </>
  );
};

export default App;
