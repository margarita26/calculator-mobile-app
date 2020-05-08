import React from "react";
import { Text, TouchableOpacity } from "react-native";

type MyButtonProps = {
  buttonColor: string;
  textColor: string;
  content: string;
  buttonWidth: string;
  onPress: () => void;
};

export const MyButton: React.FC<MyButtonProps> = ({
  buttonColor,
  content,
  onPress,
  textColor,
  buttonWidth,
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: buttonColor,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 60,
        margin: 5,
        width: buttonWidth,
      }}
      onPress={() => onPress()}
    >
      <Text style={{ fontSize: 24, color: textColor }}>{content}</Text>
    </TouchableOpacity>
  );
};
