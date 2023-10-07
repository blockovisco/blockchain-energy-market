import React, { PropsWithChildren } from "react";
import { View } from "react-native";

interface RoundedSquareProps {
  size: number;
  backgroundColor: string;
}

export const RoundedSquare = ({
  children,
  size,
  backgroundColor,
}: PropsWithChildren<RoundedSquareProps>) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        borderRadius: size / 4,
        backgroundColor: backgroundColor,
        elevation: 10,
        alignSelf: "center",
      }}
    >
      {children}
    </View>
  );
};
