import React, { useState } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const routes = [
  { name: "Home", screen: require("./screens/HomeScreen").default },
  { name: "Game", screen: require("./screens/GameScreen").default },
];

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {routes.map((route) => {
          return (
            <Stack.Screen
              key={route.name}
              name={route.name}
              component={route.screen}
              options={{ headerShown: false }}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
