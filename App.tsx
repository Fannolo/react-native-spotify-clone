import { NavigationContainer } from '@react-navigation/native';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import api from './api';
import Player from './modules/music/playlist/components/Player/Player';
import RootStack from './navigation/RootStack';
import colors from './utils/colors';

const App = (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeAreaContainer}>
        <StatusBar barStyle='light-content' />
        <ApiProvider api={api}>
          <Player.Provider>
            <NavigationContainer>
              <RootStack />
            </NavigationContainer>
          </Player.Provider>
        </ApiProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: { backgroundColor: colors.dark.black, flex: 1 },
});

export default App;
