import React, { PropsWithChildren } from "react";
import { TouchableOpacity, View, ViewStyle } from "react-native";

interface CircleProps {
  size: number;
  backgroundColor: string;
  position: "absolute" | "relative";
  top?: number;
  right?: number;
  touchable?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
}

export const Circle = ({
  style,
  children,
  size,
  backgroundColor,
  position,
  top,
  right,
  touchable,
  onPress,
}: PropsWithChildren<CircleProps>) => {
  const circleStyles = {
    ...style,
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor: backgroundColor,
    position: position,
    top: top ?? "auto",
    right: right ?? "auto",
    elevation: 10,
  };
  return touchable ? (
    <TouchableOpacity onPress={onPress} style={circleStyles}>
      {children}
    </TouchableOpacity>
  ) : (
    <View style={circleStyles}>{children}</View>
  );
};
