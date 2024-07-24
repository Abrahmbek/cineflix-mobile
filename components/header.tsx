import React from "react";
import { Text, View } from "./Themed";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Header() {
  const router = useRouter();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/cineflix.jpg")}
          resizeMode="contain"
          style={styles.logo}
        />
        <View style={styles.rightSide}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => router.push("/search")}
          >
            <MaterialIcons
              name="search"
              size={30}
              color={"white"}
              style={styles.searchLogo}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            //   onPress={openProfile}
          >
            <Image
              resizeMode="contain"
              style={styles.profile}
              source={{ uri: "https://tinyurl.com/5n7b72k3" }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingLeft: 10,
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
  },
  logo: {
    width: 150,
    height: 40,
  },
  rightSide: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "transparent",
    position: "relative",
  },
  searchLogo: {
    backgroundColor: "transparent",
  },
  profile: {
    width: 50,
    height: 35,
    borderRadius: 20,
  },
  popoverWrapper: {
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.9)",
    width: 250,
    minHeight: 100,
    right: 10,
    top: "110%",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  popover: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
  },
  logoutBtn: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: "#E7442E",
    height: 50,
  },
  logoutText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
