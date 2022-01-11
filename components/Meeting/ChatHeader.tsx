import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

interface Props {
  onSetModalVisible: any;
}

const ChatHeader = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text
        style={{ color: "#efefef", fontSize: 18 }}
        onPress={() => {
          props.onSetModalVisible(false);
        }}
      >
        Close
      </Text>
      <Text style={{ color: "#efefef", fontSize: 18, fontWeight: "bold" }}>
        Chat
      </Text>
      <Entypo name="bell" size={24} color="#efefef" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
});

export default ChatHeader;
