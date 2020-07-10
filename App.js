import React, { useState } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

// const App = () => {
//   const [turn, setTurn] = useState(1);
//   const [gameStarted, setGameStarted] = useState(false);
//   const [winner, setWinner] = useState(null);
//   const [alert, setAlert] = useState(null);
//   const [size, setSize] = useState(4);

//   const toggleTurn = () => {
//     setTurn((turn % 2) + 1);
//   };

//   const resetGameState = () => {
//     setGameStarted(false);
//     setWinner(null);
//     setTurn(1);
//   };

//   const alertBox = alert && (
//     <Text style={tailwind("text-lg font-bold")} onPress={() => setAlert(null)}>
//       {alert}
//     </Text>
//   );

//   const handleSetWinner = (player) => {
//     if (player) {
//       setWinner(player);
//     } else {
//     }
//   };
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
