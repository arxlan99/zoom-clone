import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

interface Props {}

const MeetingRoom = (props: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.textInput,
          { borderBottomColor: "#858585", borderBottomWidth: 0.2 },
        ]}
        placeholder="Enter Name"
        placeholderTextColor="#858585"
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter Room Id"
        placeholderTextColor="#858585"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Start Meeting</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    flex: 1,
  },
  textInput: {
    backgroundColor: "#333333",
    padding: 12,
    color: "white",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#3b82f6",
    padding: 12,
    margin: 20,
    borderRadius: 10,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
});

export default MeetingRoom;
