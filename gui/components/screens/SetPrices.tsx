import React, { useState } from "react";
import { View } from "react-native";
import { SetPriceInput } from "../SetPrices/SetPriceInput";
import { SetPricesInfo } from "../SetPrices/SetPricesInfo";
import { Colors } from "../../colors";

export const SetPrices = () => {
  const [maxPriceToPay, setMaxPriceToPay] = useState<string>("0");
  const [minPriceToSell, setMinPriceToSell] = useState<string>("0");
  return (
    <View
      style={{
        flex: 1,
        gap: 24,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 48,
      }}
    >
      <SetPricesInfo
        maxPriceToPay={maxPriceToPay}
        minPriceToSell={minPriceToSell}
      />
      <SetPriceInput
        label="Set maximum price"
        placeholder="Enter price"
        backgroundColor={Colors.Background.PrimaryLight}
        onChangeHandler={setMaxPriceToPay}
      />
      <SetPriceInput
        label="Set minimum price"
        placeholder="Enter price"
        backgroundColor={Colors.Background.Primary}
        onChangeHandler={setMinPriceToSell}
      />
    </View>
  );
};
