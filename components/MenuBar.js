import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  FontAwesome,
  Foundation,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import GameModal from "./GameModal";
import useModal from "../hooks/ModalHook";
import ConfirmationModal from "./ConfirmationModal";

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
  const menus = [
    {
      icon: <MaterialIcons name="home" size={35} color="#53BCD3" />,
      name: "Home",
      message:
        "By going to the home screen, the ticket you used will not be returned. Are you sure?",
      navigateTo: "Home",
    },
    {
      icon: <MaterialCommunityIcons name="ticket" size={35} color="#53BCD3" />,
      name: "Tickets",
      message:
        "By going to the shop, the ticket you used will not be returned. Are you sure?",
      navigateTo: "Shop",
    },
    {
      icon: <MaterialIcons name="refresh" size={35} color="#53BCD3" />,
      name: "Restart",
      message:
        "By restarting the game, the ticket you used will not be returned. Are you sure?",
      navigateTo: "Game",
    },
  ];
  const [modalOpen, setModalOpen] = useModal();
  const [message, setMessage] = useState("");
  const [acceptCallback, setAcceptCallback] = useState(null);

  return (
    <>
      <View style={styles.menuBarContainer}>
        {menus.map((menu) => (
          <TouchableOpacity
            key={menu.name}
            style={styles.menu}
            onPress={() => {
              setMessage(menu.message);
              setAcceptCallback(menu.navigateTo);
              setModalOpen(true);
            }}
          >
            {menu.icon}
          </TouchableOpacity>
        ))}
      </View>
      <ConfirmationModal
        visible={modalOpen}
        setVisibility={setModalOpen}
        message={message}
        onAccept={() => {
          props.navigation.navigate(acceptCallback);
        }}
      />
    </>
  );
};

export default MenuBar;
