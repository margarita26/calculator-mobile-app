import React from "react";
import { Text, View, Button, Alert } from "react-native";
import { MyButton } from "./MyButton";

export const Grid2: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        alignItems: "stretch",
        width: "100%",
      }}
    >
      <View
        style={{
          flex: 2,
        }}
      ></View>
      <View
        style={{
          flex: 3,
          flexDirection: "column",
        }}
      >
        <View style={{ flex: 1, flexDirection: "row", padding: 5 }}>
          <MyButton
            buttonColor={"grey"}
            textColor={"black"}
            content={"AC"}
            buttonWidth={"25%"}
            onPress={() => Alert.alert("AC")}
          />
          <MyButton
            buttonColor={"grey"}
            textColor={"black"}
            content={"+/-"}
            buttonWidth={"25%"}
            onPress={() => Alert.alert("+/-")}
          />
          <MyButton
            buttonColor={"grey"}
            textColor={"black"}
            content={"%"}
            buttonWidth={"25%"}
            onPress={() => Alert.alert("%")}
          />
          <MyButton
            buttonColor={"orange"}
            textColor={"white"}
            content={"÷"}
            buttonWidth={"25%"}
            onPress={() => Alert.alert("÷")}
          />
        </View>

        <View style={{ flex: 1, flexDirection: "row" }}>
          <MyButton
            buttonColor={"#414141"}
            textColor={"white"}
            content={"7"}
            buttonWidth={"25%"}
            onPress={() => Alert.alert("7")}
          />
          <MyButton
            buttonColor={"#414141"}
            textColor={"white"}
            content={"8"}
            buttonWidth={"25%"}
            onPress={() => Alert.alert("8")}
          />
          <MyButton
            buttonColor={"#414141"}
            textColor={"white"}
            content={"9"}
            buttonWidth={"25%"}
            onPress={() => Alert.alert("9")}
          />
          <MyButton
            buttonColor={"orange"}
            textColor={"white"}
            content={"x"}
            buttonWidth={"25%"}
            onPress={() => Alert.alert("x")}
          />
        </View>

        <View style={{ flex: 1, flexDirection: "row" }}>
          <MyButton
            buttonColor={"#414141"}
            textColor={"white"}
            content={"4"}
            buttonWidth={"25%"}
            onPress={() => Alert.alert("4")}
          />
          <MyButton
            buttonColor={"#414141"}
            textColor={"white"}
            content={"5"}
            buttonWidth={"25%"}
            onPress={() => Alert.alert("5")}
          />
          <MyButton
            buttonColor={"#414141"}
            textColor={"white"}
            content={"6"}
            buttonWidth={"25%"}
            onPress={() => Alert.alert("6")}
          />
          <MyButton
            buttonColor={"orange"}
            textColor={"white"}
            content={"-"}
            buttonWidth={"25%"}
            onPress={() => Alert.alert("-")}
          />
        </View>

        <View style={{ flex: 1, flexDirection: "row" }}>
          <MyButton
            buttonColor={"#414141"}
            textColor={"white"}
            content={"1"}
            buttonWidth={"25%"}
            onPress={() => Alert.alert("4")}
          />
          <MyButton
            buttonColor={"#414141"}
            textColor={"white"}
            content={"2"}
            buttonWidth={"25%"}
            onPress={() => Alert.alert("5")}
          />
          <MyButton
            buttonColor={"#414141"}
            textColor={"white"}
            content={"3"}
            buttonWidth={"25%"}
            onPress={() => Alert.alert("6")}
          />
          <MyButton
            buttonColor={"orange"}
            textColor={"white"}
            content={"+"}
            buttonWidth={"25%"}
            onPress={() => Alert.alert("+")}
          />
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <MyButton
            buttonColor={"#414141"}
            textColor={"white"}
            content={"0"}
            buttonWidth={"50%"}
            onPress={() => Alert.alert("0")}
          />
          <MyButton
            buttonColor={"#414141"}
            textColor={"white"}
            content={"."}
            buttonWidth={"25%"}
            onPress={() => Alert.alert(".")}
          />
          <MyButton
            buttonColor={"#414141"}
            textColor={"white"}
            content={"="}
            buttonWidth={"25%"}
            onPress={() => Alert.alert("=")}
          />
        </View>
      </View>
    </View>
  );
};
