import React, { PropsWithChildren } from "react";
import { View, ViewStyle } from "react-native";

export const Container = ({
  children,
  style,
}: PropsWithChildren<{ style?: ViewStyle }>) => {
  return (
    <View
      style={{
        ...style,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </View>
  );
};
