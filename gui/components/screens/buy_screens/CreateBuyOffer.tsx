import React, { useState } from "react";
import { View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Input } from "@rneui/themed";
import { createSellOffer } from "../../../requests/createRequests";
import { Container } from "../../shared/Container";
import { SmallText } from "../../shared/StyledText";
import { Colors } from "react-native/Libraries/NewAppScreen";

const CreateBuyOffer = () => {
  const [energyToBuy, setEnergyToBuy] = useState("");
  const [energyPrice, setEnergyPrice] = useState("");

  const handleAmountChange = (text: string) => {
    setEnergyToBuy(text);
  };

  const handlePriceChange = (text: string) => {
    setEnergyPrice(text);
  };

  return (
    <Container>
      <SafeAreaView>
        <View>
          <SmallText>Amount of energy to buy:</SmallText>
          <Input
            id="energyBuyInput"
            onChangeText={handleAmountChange}
            value={energyToBuy}
            style={Colors.Text.White}
          ></Input>
        </View>
        <View>
          <SmallText>Price for 1 unit of energy:</SmallText>
          <Input
            id="energyPriceInput"
            onChangeText={handlePriceChange}
            value={energyPrice}
            style={Colors.Text.White}
          ></Input>
        </View>
        <View>
          <Button
            size="lg"
            title="Confirm"
            titleStyle={{
              fontSize: 30,
              color: Colors.Text.White,
              textAlign: "center",
              fontWeight: "bold",
            }}
            buttonStyle={{
              backgroundColor: Colors.Background.White,
              borderWidth: 0,
              borderRadius: 30,
            }}
            onPress={async () =>
              await createSellOffer(energyToBuy, energyPrice)
            }
          />
        </View>
      </SafeAreaView>
    </Container>
  );
};

export default CreateBuyOffer;
