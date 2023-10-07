import React, { PropsWithChildren } from "react";
import { Text } from "react-native";
import { TextStyle } from "react-native";
import { Colors } from "../../colors";

interface HeaderProps {
  style?: TextStyle;
  color?: string;
  level: 1 | 2 | 3 | 4 | 5;
}

export const Header = ({
  children,
  color,
  style,
  level,
}: PropsWithChildren<HeaderProps>) => {
  return (
    <Text
      style={{
        ...style,
        fontSize: getFontSize(level),
        fontWeight: "500",
        color: color ?? Colors.Text.White,
      }}
    >
      {children}
    </Text>
  );
};

const getFontSize = (level: 1 | 2 | 3 | 4 | 5) => {
  const headerLevelMap = [96, 72, 60, 48, 36];
  return headerLevelMap[level - 1];
};
