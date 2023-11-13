import React from "react";
import { TextStyle, Text } from "react-native";
import { Colors } from "../../colors";
import { SetPriceCard } from "./SetPriceCard";
import { SmallText } from "../shared/StyledText";

interface SetPricesInfoProps {
  maxPriceToPay: string;
  minPriceToSell: string;
}
export const SetPricesInfo = ({
  minPriceToSell,
  maxPriceToPay,
}: SetPricesInfoProps) => {
  return (
    <SetPriceCard backgroundColor={Colors.Background.White}>
      <SmallText color={textColor} style={labelStyle}>
        Maximal price to pay for 1kw:
      </SmallText>
      <Text style={quantityStyle}>{`${maxPriceToPay} B`}</Text>

      <SmallText color={textColor} style={labelStyle}>
        Minimal price to sell 1kW:
      </SmallText>
      <Text style={quantityStyle}>{`${minPriceToSell} B`}</Text>
    </SetPriceCard>
  );
};
const textColor = Colors.Text.Primary;

const labelStyle: TextStyle = {
  fontWeight: "600",
  borderBottomColor: Colors.Background.PrimaryDark,
  borderBottomWidth: 1,
  width: "100%",
  padding: 2,
};
const quantityStyle: TextStyle = {
  color: textColor,
  fontWeight: "700",
  fontSize: 24,
};
