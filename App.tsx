import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Grid2 } from "./components/Grid2";
import { MyButton } from "./components/MyButton";

export default function App() {
  return (
    <View style={styles.container}>
      <Grid2/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
