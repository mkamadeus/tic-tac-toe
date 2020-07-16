/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './pages/HomeScreen';
import GameScreen from './pages/GameScreen';
import ShopScreen from './pages/ShopScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={<HomeScreen />} />
        {/* <Stack.Screen name="Game" component={<GameScreen />} /> */}
        <Stack.Screen name="Shop" component={<ShopScreen />} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
