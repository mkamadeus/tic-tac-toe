import React from "react";
import { StyleSheet, View, Button, Text, StatusBar } from "react-native";
import HomeButton from "../components/HomeButton";
import Logo from "../assets/logo.svg";

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    flex: 3,
    justifyContent: "center",
    marginBottom: 40,
  },
  buttonContainer: {
    flex: 1,
    width: "100%",
  },
});

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.homeContainer}>
      <StatusBar style="auto" backgroundColor="#eee" />
      <View style={styles.logoContainer}>
        <Logo width={300} height={300} />
      </View>
      <View style={styles.buttonContainer}>
        <View style={{ marginBottom: 15 }}>
          <HomeButton
            onPress={() => {
              navigation.navigate("Game");
            }}
            bgcolor="#5BEE9F"
          >
            Play
          </HomeButton>
        </View>
        <View>
          <HomeButton
            onPress={() => {
              navigation.navigate("Game");
            }}
            bgcolor="#FA8FFC"
          >
            Shop
          </HomeButton>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;