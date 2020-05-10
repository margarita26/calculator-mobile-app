import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Grid } from "./components/Grid";
import { MyButton } from "./components/MyButton";

export default function App() {
  return (

    <SafeAreaView style={styles.container}>
      <Grid/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",

  },
});
