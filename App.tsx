import { NavigationContainer } from '@react-navigation/native';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import api from './api';
import RootStack from './navigation/RootStack';
import colors from './utils/colors';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeAreaContainer}>
        <StatusBar barStyle={'light-content'} />
        <ApiProvider api={api}>
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
        </ApiProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: { flex: 1, backgroundColor: colors.dark.black },
});

export default App;
