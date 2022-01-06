import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import styled from "styled-components/native";

interface Props {}

const SearchBar = (props: Props) => {
  return (
    <View style={styles.container}>
      <EvilIcons
        name="search"
        size={30}
        color="#858585"
        style={{ marginRight: 5 }}
      />
      <Input
        placeholder="Search"
        style={{ fontSize: 20, color: "white" }}
        underlineColorAndroid="transparent"
        placeholderTextColor="#858585"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#333333",
    padding: 8,
    margin: 10,
    fontSize: 20,
    borderRadius: 8,
  },
});

const Input = styled.TextInput`
  color: white;
`;

export default SearchBar;
/*   placeholder="Search"
        style={{ fontSize: 20, color: "white" }}
        underlineColorAndroid="transparent"
       */
