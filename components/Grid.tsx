import React from "react";
import { Text, View, Button, Alert } from "react-native";
import { MyButton } from "./MyButton";

export const Grid: React.FC = () => {
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
            flex={1}
            onPress={() => Alert.alert("AC")}
          />
          <MyButton
            buttonColor={"grey"}
            textColor={"black"}
            content={"+/-"}
            flex={1}
            onPress={() => Alert.alert("+/-")}
          />
          <MyButton
            buttonColor={"grey"}
            textColor={"black"}
            content={"%"}
            flex={1}
            onPress={() => Alert.alert("%")}
          />
          <MyButton
            buttonColor={"orange"}
            textColor={"white"}
            content={"÷"}
            flex={1}
            onPress={() => Alert.alert("÷")}
          />
        </View>

        <View style={{ flex: 1, flexDirection: "row", margin: 5}}>
          <MyButton
            buttonColor={"#414141"}
            textColor={"white"}
            content={"7"}
            flex={1}
            onPress={() => Alert.alert("7")}
          />
          <MyButton
            buttonColor={"#414141"}
            textColor={"white"}
            content={"8"}
            flex={1}
            onPress={() => Alert.alert("8")}
          />
          <MyButton
            buttonColor={"#414141"}
            textColor={"white"}
            content={"9"}
            flex={1}
            onPress={() => Alert.alert("9")}
          />
          <MyButton
            buttonColor={"orange"}
            textColor={"white"}
            content={"x"}
            flex={1}
            onPress={() => Alert.alert("x")}
          />
        </View>

        <View style={{ flex: 1, flexDirection: "row" }}>
          <MyButton
            buttonColor={"#414141"}
            textColor={"white"}
            content={"4"}
            flex={1}
            onPress={() => Alert.alert("4")}
          />
          <MyButton
            buttonColor={"#414141"}
            textColor={"white"}
            content={"5"}
            flex={1}
            onPress={() => Alert.alert("5")}
          />
          <MyButton
            buttonColor={"#414141"}
            textColor={"white"}
            content={"6"}
            flex={1}
            onPress={() => Alert.alert("6")}
          />
          <MyButton
            buttonColor={"orange"}
            textColor={"white"}
            content={"-"}
            flex={1}
            onPress={() => Alert.alert("-")}
          />
        </View>

        <View style={{ flex: 1, flexDirection: "row" }}>
          <MyButton
            buttonColor={"#414141"}
            textColor={"white"}
            content={"1"}
            flex={1}
            onPress={() => Alert.alert("4")}
          />
          <MyButton
            buttonColor={"#414141"}
            textColor={"white"}
            content={"2"}
            flex={1}
            onPress={() => Alert.alert("5")}
          />
          <MyButton
            buttonColor={"#414141"}
            textColor={"white"}
            content={"3"}
            flex={1}
            onPress={() => Alert.alert("6")}
          />
          <MyButton
            buttonColor={"orange"}
            textColor={"white"}
            content={"+"}
            flex={1}
            onPress={() => Alert.alert("+")}
          />
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <MyButton
            buttonColor={"#414141"}
            textColor={"white"}
            content={"0"}
            flex={2}
            onPress={() => Alert.alert("0")}
          />
          <MyButton
            buttonColor={"#414141"}
            textColor={"white"}
            content={"."}
            flex={1}
            onPress={() => Alert.alert(".")}
          />
          <MyButton
            buttonColor={"#414141"}
            textColor={"white"}
            content={"="}
            flex={1}
            onPress={() => Alert.alert("=")}
          />
        </View>
      </View>
    </View>
  );
};
