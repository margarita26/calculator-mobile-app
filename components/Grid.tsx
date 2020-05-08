import React from "react";
import { Text, View, Button } from "react-native";

export const Grid: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        flexWrap: "wrap",
        backgroundColor: "yellow",
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          flexWrap: "wrap",
          backgroundColor: "black",
          height: 50,
        }}
      >
        <View
          style={{ width: 100, height: 100, backgroundColor: "powderblue" }}
        />
        <View style={{ width: 100, height: 100, backgroundColor: "skyblue" }} />
        <View
          style={{ width: 100, height: 100, backgroundColor: "steelblue" }}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          flexWrap: "wrap",
        }}
      >
        <View style={{ width: 100, height: 100, backgroundColor: "red" }} />
        <View style={{ width: 100, height: 100, backgroundColor: "green" }} />
        <View style={{ width: 100, height: 100, backgroundColor: "black" }} />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          flexWrap: "wrap",
        }}
      >
        <View style={{ width: 100, height: 100, backgroundColor: "yellow" }} />
        <View style={{ width: 100, height: 100, backgroundColor: "purple" }} />
        <View style={{ width: 100, height: 100, backgroundColor: "orange" }} />
      </View>
    </View>
  );
};
