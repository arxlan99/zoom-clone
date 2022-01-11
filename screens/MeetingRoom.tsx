import React, { Fragment, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import StartMeeting from "../components/Meeting/StartMeeting";
import { io } from "socket.io-client";
import { Camera } from "expo-camera";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import ChatScreen from "../components/Meeting/ChatScreen";

interface Props {}

let socket: any;

const MeetingRoom = (props: Props) => {
  const [name, setName] = useState();
  const [roomId, setRoomId] = useState();
  const [activeUsers, setActiveUsers] = useState([]);
  const [startCamera, setStartCamera] = useState(false);
  const [microphoneStatus, setMicrophoneStatus] = useState<boolean>(true);
  const [modalVisible, setModalVisible] = useState(false);

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
    socket = io("http://6ebd-85-100-199-40.ngrok.io");

    socket.on("connection", () => {
      console.log("connected");
    });
    socket.on("all-users", (users: any) => {
      setActiveUsers(users);
    });
  }, []);

  useEffect(() => {
    setActiveUsers(activeUsers.filter((user: any) => user.username != name));
  }, [name]);

  return (
    <View style={styles.container}>
      {startCamera ? (
        <Fragment>
          <Modal
            animationType="slide"
            transparent={false}
            presentationStyle="fullScreen"
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <ChatScreen onSetModalVisible={setModalVisible} />
          </Modal>
          <ScrollView>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                margin: 10,
                flexDirection: "row",
              }}
            >
              <Camera
                type={"front"}
                style={{
                  width: activeUsers.length === 1 ? "100%" : 200,
                  height: activeUsers.length === 1 ? "100%" : 200,
                }}
              ></Camera>
              {activeUsers
                .filter(
                  (user: any) =>
                    // console.log("user -----", user.userName, "-name-", name)
                    user.userName !== name
                )
                .map((user: any, index: number) => (
                  <View key={index} style={styles.userContainer}>
                    <Text style={styles.userText}>{user.userName}</Text>
                  </View>
                ))}
            </View>
          </ScrollView>
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
            <TouchableOpacity
              style={styles.tile}
              onPress={() => setModalVisible(true)}
            >
              <Ionicons name="chatbox" size={24} color="#efefef" />
              <Text style={styles.textTile}>Chat</Text>
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
    backgroundColor: "#262626",
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
  userContainer: {
    borderColor: "gray",
    borderWidth: 1,
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  userText: {
    color: "#efefef",
  },
});

export default MeetingRoom;
