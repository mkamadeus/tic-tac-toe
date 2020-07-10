import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Home from "../assets/home-outline.svg";
import Restart from "../assets/refresh-outline.svg";
import Pay from "../assets/cash-outline.svg";

const styles = StyleSheet.create({
  menuBarContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#aaaaaa",
  },
  menu: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ({ menus }) => {
  return (
    <View style={styles.menuBarContainer}>
      {menus.map((menu) => (
        <View key={menu.name} style={styles.menu}>
          {menu.icon}
          <Text>{menu.name}</Text>
        </View>
      ))}
    </View>
  );
};
