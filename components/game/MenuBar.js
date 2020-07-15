import React, { useState, useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  FontAwesome,
  Foundation,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import GameModal from "./GameModal";
import useModal from "../../hooks/ModalHook";
import ConfirmationModal from "./ConfirmationModal";
import { ModalContext } from "../../context/ModalContext";

const styles = StyleSheet.create({
  menuBarContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#5BE5EE",
  },
  menu: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

const MenuBar = (props) => {
  const {
    setMessage,
    setLeftButtonFunction,
    setRightButtonFunction,
    setVisible,
  } = useContext(ModalContext);

  const menus = [
    {
      icon: <MaterialIcons name="home" size={35} color="#53BCD3" />,
      name: "Home",
      message:
        "By going to the home screen, the ticket you used will not be returned. Are you sure?",
      rightButtonFunction: function () {
        props.navigation.navigate("Home");
      },
    },
    {
      icon: <MaterialCommunityIcons name="ticket" size={35} color="#53BCD3" />,
      name: "Tickets",
      message:
        "By going to the shop, the ticket you used will not be returned. Are you sure?",
      navigateTo: "Shop",
      rightButtonFunction: function () {
        props.navigation.navigate("Shop");
      },
    },
    {
      icon: <MaterialIcons name="refresh" size={35} color="#53BCD3" />,
      name: "Restart",
      message:
        "By restarting the game, the ticket you used will not be returned. Are you sure?",
      navigateTo: "Game",
      rightButtonFunction: function () {
        props.navigation.navigate("Game");
      },
    },
  ];

  return (
    <>
      <View style={styles.menuBarContainer}>
        {menus.map((menu) => (
          <TouchableOpacity
            key={menu.name}
            style={styles.menu}
            onPress={() => {
              setMessage(menu.message);
              setRightButtonFunction(menu.rightButtonFunction);
              setVisible(true);
            }}
          >
            {menu.icon}
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

export default MenuBar;
