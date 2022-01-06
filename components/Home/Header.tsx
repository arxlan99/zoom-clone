import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

interface Props {}

const Header = (props: Props) => {
  return (
    <View style={styles.container}>
      <Feather name="square" size={30} color="white" />
      <Text style={styles.title}>Meet & Chat</Text>
      <FontAwesome name="pencil-square-o" size={30} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Header;
