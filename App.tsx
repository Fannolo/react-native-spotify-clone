import { NavigationContainer } from '@react-navigation/native';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import api from './api';
import RootStack from './navigation/RootStack';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'light-content'} />
      <ApiProvider api={api}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </ApiProvider>
    </SafeAreaProvider>
  );
};

export default App;
