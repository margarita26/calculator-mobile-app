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

    const buttonHeight = 80;

  return (
    <TouchableOpacity
      style={{
        flex: flex,
        backgroundColor: buttonColor,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 80/2,
        marginLeft: 5,
        marginRight: 5,
        paddingBottom: 5,
        marginTop: 5,
        height: 80
      }}
      onPress={() => onPress()}
    >
      <Text style={{ fontSize: 24, color: textColor }}>{content}</Text>
    </TouchableOpacity>
  );
};
