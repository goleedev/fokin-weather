import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Loading from "./Loading";

export default function App() {
  return <Loading />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#FDF6AA",
  },
  text: {
    color: "#2c2c2c",
    fontSize: 30,
  },
});
