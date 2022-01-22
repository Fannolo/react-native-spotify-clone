import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { RootStackParamList } from './constants';
import HomeScreen from 'rnplayer/modules/music/playlist/screens/HomeScreen';

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: React.FC = () => (
  <Stack.Navigator initialRouteName='HomeScreen'>
    <Stack.Group screenOptions={{ headerShown: false }}>
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
    </Stack.Group>
  </Stack.Navigator>
);

export default RootStack;
