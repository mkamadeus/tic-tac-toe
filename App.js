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
import WinScreen from './pages/WinScreen';
import {TicketContextProvider} from './context/TicketContext';

const Stack = createStackNavigator();

const App = () => {
  return (
    <TicketContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Game"
            component={GameScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Shop"
            component={ShopScreen}
            options={{
              headerTitle: 'Ticket Shop',
            }}
          />
          <Stack.Screen
            name="Win"
            component={WinScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TicketContextProvider>
  );
};

export default App;
