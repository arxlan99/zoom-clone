import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import ChatHeader from "./ChatHeader";

interface Props {
    onSetModalVisible: any
}

const ChatScreen = (props: Props) => {
  return (
    <View style={styles.chatContainer}>
      <ChatHeader onSetModalVisible={props.onSetModalVisible}/>
      <View style={{ flex: 1 }}>
        <Text></Text>
      </View>
      <View style={styles.messageBox}>
        <Text style={{ color: "white" }}>Send to everyone:</Text>
        <View style={{ flexDirection: "row" }}>
          <TextInput
            placeholder="Write Message"
            style={{
              backgroundColor: "#333333",
              padding: 12,
              color: "white",
              fontSize: 16,
              borderRadius: 5,
              marginVertical: 10,
              flex: 1,
            }}
            placeholderTextColor="#858585"
          />
          <FontAwesome
            style={{ alignSelf: "center", padding: 5 }}
            name="telegram"
            size={40}
            color="#3b82f6"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatContainer: {
    flex: 1,
    backgroundColor: "#1c1c1c",
  },
  messageBox: {
    borderWidth: 0.2,
    borderTopColor: "gray",
    padding: 10,
  },
});

export default ChatScreen;
