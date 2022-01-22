import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { RootStackParamList, Routes } from './constants';
import HomeScreen from 'rnplayer/modules/music/playlist/screens/HomeScreen';
import PlaylistScreen from 'rnplayer/modules/music/playlist/screens/PlaylistScreen';

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: React.FC = () => (
  <Stack.Navigator initialRouteName={Routes.HomeScreen}>
    <Stack.Group screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Routes.HomeScreen} component={HomeScreen} />
      <Stack.Screen name={Routes.PlaylistScreen} component={PlaylistScreen} />
    </Stack.Group>
  </Stack.Navigator>
);

export default RootStack;
