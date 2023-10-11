import React, { PropsWithChildren } from "react";
import { View, ViewStyle } from "react-native";
import { Colors } from "../../colors";

export const SetPriceCard = ({
  children,
  style,
  backgroundColor = Colors.Background.Primary,
  borderColor = Colors.Background.PrimaryDark,
}: PropsWithChildren<{
  style?: ViewStyle;
  backgroundColor?: string;
  borderColor?: string;
}>) => {
  return (
    <View
      style={{
        ...style,
        borderRadius: 16,
        backgroundColor: backgroundColor,
        padding: 16,
        width: "80%",
        borderColor: borderColor,
        borderWidth: 3,
        elevation: 24,
      }}
    >
      {children}
    </View>
  );
};
