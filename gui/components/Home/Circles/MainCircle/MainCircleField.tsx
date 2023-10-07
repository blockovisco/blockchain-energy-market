import React from "react";

import { Text, View } from "react-native";
import { SmallText } from "../../../shared/StyledText";
import { Colors } from "../../../../colors";
import { sizeOfBigCircle } from "../../../../constants";
import { RoundedField } from "../../../shared/RoundedField";
interface MainCircleFieldProps {
  title: string;
  value: string;
  textColor: string;
}

export const MainCircleField = ({
  title,
  value,
  textColor,
}: MainCircleFieldProps) => {
  return (
    <View style={{ paddingBottom: 2 }}>
      <SmallText
        color={Colors.Text.White}
        style={{ marginLeft: 0.15 * sizeOfBigCircle, paddingBottom: 2 }}
      >
        {title}
      </SmallText>
      <RoundedField
        size={sizeOfBigCircle * 0.7}
        backgroundColor={Colors.Background.PrimaryDark}
      >
        <Text style={{ color: textColor, marginLeft: 10 }}>{value}</Text>
      </RoundedField>
    </View>
  );
};
