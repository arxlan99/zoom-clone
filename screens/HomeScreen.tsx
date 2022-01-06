import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ContactMenu from "../components/Home/ContactMenu";
import Header from "../components/Home/Header";
import MenuButtons from "../components/Home/MenuButtons";
import SearchBar from "../components/Home/SearchBar";
import { View } from "../components/Themed";

interface Props {
  navigation: any;
}

const HomeScreen = ({ navigation }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SearchBar />
      <MenuButtons navigation={navigation} />
      <ContactMenu />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
  },
});

export default HomeScreen;
