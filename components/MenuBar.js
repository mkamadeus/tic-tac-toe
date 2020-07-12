import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome, Foundation } from "@expo/vector-icons";

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

const menus = [
  {
    icon: <FontAwesome name="home" size={30} color="black" />,
    name: "Home",
    onPress: () => {
      setModal({
        show: true,
        text: "You will lost your tiket if you go back to Home now.",
        continueAction: () => {
          window.location.href = "";
        },
      });
    },
  },
  {
    icon: (
      <View style={styles.sizeMenu}>
        <Text>3 x 3</Text>
      </View>
    ),
    name: "Size",
  },
  {
    icon: <FontAwesome name="dollar" size={30} color="black" />,
    name: "Tikets",
  },
  {
    icon: <Foundation name="refresh" size={30} color="black" />,
    name: "Restart",
    onPress: () => {
      setModal({
        show: true,
        text: "You will still lost your tiket if you restart now",
      });
    },
  },
  {
    icon: <FontAwesome name="sign-out" size={30} color="black" />,
    name: "Quit",
    onPress: () => {
      setModal({ show: true, text: "Are you sure you want to quit now ? " });
    },
  },
];

const MenuBar = () => {
  return (
    <View style={styles.menuBarContainer}>
      {menus.map((menu) => (
        <TouchableOpacity
          key={menu.name}
          style={styles.menu}
          onPress={menu.onPress}
        >
          {menu.icon}
          <Text>{menu.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default MenuBar;
