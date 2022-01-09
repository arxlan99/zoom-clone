import React, { Fragment, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import StartMeeting from "../components/Meeting/StartMeeting";
import { io } from "socket.io-client";
import { Camera } from "expo-camera";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

interface Props {}

// let socket: undefined;

const MeetingRoom = (props: Props) => {
  let socket = io("http://f773-85-100-199-40.ngrok.io");

  const [name, setName] = useState();
  const [roomId, setRoomId] = useState();
  const [activeUsers, setActiveUsers] = useState();
  const [startCamera, setStartCamera] = useState(false);
  const [microphoneStatus, setMicrophoneStatus] = useState<boolean>(true);

  const playCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted") {
      setStartCamera(true);
    } else {
      Alert.alert("Camera Permission", "Please allow camera permission");
    }
  };

  const joinRoom = () => {
    playCamera();
    socket.emit("join-room", { roomId: roomId, userName: name });
  };

  useEffect(() => {
    socket = socket.on("connection", () => {
      console.log("connected");
    });
    socket.on("all-users", (users: any) => {
      console.log("active users", users);
      setActiveUsers(users);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <View style={styles.container}>
      {startCamera ? (
        <Fragment>
          <Camera type={"front"} style={{ width: "100%", flex: 1 }}></Camera>
          <View style={styles.menu}>
            <TouchableOpacity
              style={styles.tile}
              onPress={() => setMicrophoneStatus(!microphoneStatus)}
            >
              {microphoneStatus ? (
                <FontAwesome name="microphone" size={24} color="#efefef" />
              ) : (
                <FontAwesome
                  name="microphone-slash"
                  size={24}
                  color="#efefef"
                />
              )}
              <Text style={styles.textTile}>Mute</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tile}>
              <FontAwesome name="video-camera" size={24} color="#efefef" />
              <Text style={styles.textTile}>Video</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tile}>
              <FontAwesome name="share-square-o" size={24} color="#efefef" />
              <Text style={styles.textTile}>Share</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tile}>
              <FontAwesome5 name="users" size={24} color="#efefef" />
              <Text style={styles.textTile}>Share</Text>
            </TouchableOpacity>
          </View>
        </Fragment>
      ) : (
        <StartMeeting
          name={name}
          roomId={roomId}
          onSetName={setName}
          onSetRoomId={setRoomId}
          onJoinRoom={joinRoom}
        />
      )}
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
  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  tile: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  textTile: {
    color: "#efefef",
    marginTop: 10,
  },
});

export default MeetingRoom;
