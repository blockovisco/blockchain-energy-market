import React from "react";

import { Text, View } from "react-native";
import { SmallText } from "../../../shared/StyledText";
import { Colors } from "../../../../colors";
import { sizeOfBigCircle } from "../../../../constants";
import { RoundedField } from "../../../shared/RoundedField";
interface MainCircleFieldProps {
  title: string;
  value?: string;
  values?: string[];
  textColor?: string;
  textColors?: string[];
}

export const MainCircleField = ({
  title,
  value,
  textColor,
  values,
  textColors,
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
        {!!value && (
          <Text style={{ color: textColor, marginLeft: 10 }}>{value}</Text>
        )}
        {!!values &&
          values.length > 0 &&
          values.map((value, i) => (
            <Text key={i} style={{ color: textColors?.[i], marginLeft: 10 }}>
              {value}
            </Text>
          ))}
      </RoundedField>
    </View>
  );
};
