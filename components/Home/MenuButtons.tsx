import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import styled from "styled-components/native";

interface Props {
  navigation: any;
}

const MenuButtons = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <VideoButtonContainer
          onPress={() => {
            navigation.navigate("MeetingRoom");
          }}
        >
          <FontAwesome name="video-camera" size={30} color="white" />
        </VideoButtonContainer>
        <Text style={{ color: "#858585" }}>New Meeting</Text>
      </View>
      <View style={styles.buttonContainer}>
        <JoinButtonContainer>
          <FontAwesome name="video-camera" size={30} color="white" />
        </JoinButtonContainer>
        <Text style={{ color: "#858585" }}>Join</Text>
      </View>
      <View style={styles.buttonContainer}>
        <ScheduleButtonContainer>
          <FontAwesome name="calendar" size={30} color="white" />
        </ScheduleButtonContainer>
        <Text style={{ color: "#858585" }}>Schedule</Text>
      </View>
      <View style={styles.buttonContainer}>
        <ShareButtonContainer>
          <FontAwesome name="video-camera" size={30} color="white" />
        </ShareButtonContainer>
        <Text style={{ color: "#858585" }}>Share Screen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    marginHorizontal: 25,
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
  },
});

const VideoButtonContainer = styled.TouchableOpacity`
  background-color: #fb923c;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const JoinButtonContainer = styled(VideoButtonContainer)`
  background-color: #0ea5e9;
`;

const ScheduleButtonContainer = styled(VideoButtonContainer)`
  background-color: #0ea5e9;
`;

const ShareButtonContainer = styled(VideoButtonContainer)`
  background-color: #0ea5e9;
`;

export default MenuButtons;
