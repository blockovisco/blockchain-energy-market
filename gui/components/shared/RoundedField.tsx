import React, { PropsWithChildren } from "react";
import { View } from "react-native";

interface RoundedFieldProps {
  size: number;
  backgroundColor: string;
}
export const RoundedField = ({
  children,
  size,
  backgroundColor,
}: PropsWithChildren<RoundedFieldProps>) => {
  return (
    <View
      style={{
        width: size,
        borderRadius: size / 2,
        backgroundColor: backgroundColor,
        alignSelf: "center",
        flexDirection: "row",
      }}
    >
      {children}
    </View>
  );
};
