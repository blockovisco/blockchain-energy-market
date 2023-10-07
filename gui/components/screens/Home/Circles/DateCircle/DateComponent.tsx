import { PropsWithChildren } from "react";
import { Text } from "react-native";
import React from "react";
import { Colors } from "../../../../../colors";

export const DateComponent = ({ children }: PropsWithChildren) => {
  return (
    <Text
      style={{
        fontSize: 35,
        fontWeight: "bold",
        color: Colors.Text.White,
        textAlign: "center",
        margin: -5,
      }}
    >
      {children}
    </Text>
  );
};
