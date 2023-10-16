import React from "react";
import { Text, TextStyle } from "react-native";
import { PropsWithChildren } from "react";
import { Colors } from "../../colors";

export const StyledText = ({
  children,
  fontSize = 15,
  color = Colors.Text.Primary,
  style,
}: PropsWithChildren<{
  fontSize?: number;
  color?: string;
  style?: TextStyle;
}>) => {
  return (
    <Text style={{ ...style, fontSize: fontSize, color: color }}>
      {children}
    </Text>
  );
};

export const SmallText = ({
  children,
  color,
  style,
}: PropsWithChildren<{
  color?: string;
  style?: TextStyle;
}>) => {
  return (
    <StyledText fontSize={16} color={color} style={style}>
      {children}
    </StyledText>
  );
};

export const BigText = ({
  children,
  color,
  style,
}: PropsWithChildren<{
  color?: string;
  style?: TextStyle;
}>) => {
  return (
    <StyledText fontSize={30} color={color} style={style}>
      {children}
    </StyledText>
  );
};
