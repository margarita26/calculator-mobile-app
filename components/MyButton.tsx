import React from "react";
import { Text, TouchableOpacity } from "react-native";

type MyButtonProps = {
  buttonColor: string;
  textColor: string;
  content: string;
  flex: number;
  onPress: () => void;
};

export const MyButton: React.FC<MyButtonProps> = ({
  buttonColor,
  content,
  onPress,
  textColor,
  flex,
}) => {
  return (
    <TouchableOpacity
      style={{
        flex: flex,
        backgroundColor: buttonColor,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 40,
        margin: 5,
      }}
      onPress={() => onPress()}
    >
      <Text style={{ fontSize: 24, color: textColor }}>{content}</Text>
    </TouchableOpacity>
  );
};
