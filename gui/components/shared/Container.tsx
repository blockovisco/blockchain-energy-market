import React, { PropsWithChildren } from "react";
import { View } from "react-native";
import { Colors } from "../../colors";

export const Container = ({ children }: PropsWithChildren) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: Colors.Background.White,
        justifyContent: "center",
      }}
    >
      {children}
    </View>
  );
};
