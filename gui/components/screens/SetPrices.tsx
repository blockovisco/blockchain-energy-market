import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { SetPriceInput } from "../SetPrices/SetPriceInput";
import { SetPricesInfo } from "../SetPrices/SetPricesInfo";
import { Colors } from "../../colors";
import {
  useGetMaximumPrice,
  useSetMaximumPrice,
} from "../../hooks/useMaximumPrice";
import {
  useGetMinimumPrice,
  useSetMinimumPrice,
} from "../../hooks/useMinimumPrice";

export const SetPrices = () => {
  const [maxPriceToPay, setMaxPriceState] = useState<string>("10");
  const [minPriceToSell, setMinPriceState] = useState<string>("11");
  const { mutate: setMaxPrice } = useSetMaximumPrice();
  const { mutate: setMinPrice } = useSetMinimumPrice();

  const { isFetched: isMaxPriceFetched, data: maxPriceData } =
    useGetMaximumPrice();

  const { isFetched: isMinPriceFetched, data: minPriceData } =
    useGetMinimumPrice();

  const setMaxPriceHandler = (maxPrice: string) => {
    setMaxPriceState(maxPrice);
    setMaxPrice({ maxPrice });
  };

  const setMinPriceHandler = (minPrice: string) => {
    setMinPriceState(minPrice);
    setMinPrice({ minPrice });
  };

  useEffect(() => {
    if (isMaxPriceFetched && !!maxPriceData) {
      setMaxPriceState(maxPriceData);
    }
  }, [isMaxPriceFetched, maxPriceData]);

  useEffect(() => {
    if (isMinPriceFetched && !!minPriceData) {
      setMinPriceState(minPriceData);
    }
  }, [isMinPriceFetched, minPriceData]);
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
        onChangeHandler={setMaxPriceHandler}
      />
      <SetPriceInput
        label="Set minimum price"
        placeholder="Enter price"
        backgroundColor={Colors.Background.Primary}
        onChangeHandler={setMinPriceHandler}
      />
    </View>
  );
};
