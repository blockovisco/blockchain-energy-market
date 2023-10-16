import React, { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Input } from "@rneui/themed";
import { createSellOffer } from "../../../requests/createRequests";
import { Container } from "../../shared/Container";
import { SmallText } from "../../shared/StyledText";
import { Colors } from "react-native/Libraries/NewAppScreen";

const CreateSellOffer = () => {
  const [energyToSell, setEnergyToSell] = useState("");
  const [energyPrice, setEnergyPrice] = useState("");

  const handleAmountChange = (text: string) => {
    setEnergyToSell(text);
  };

  const handlePriceChange = (text: string) => {
    setEnergyPrice(text);
  };

  return (
    <Container>
      <SafeAreaView>
        <View>
          <SmallText>Amount of energy to sell:</SmallText>
          <Input
            id="energySellInput"
            onChangeText={handleAmountChange}
            value={energyToSell}
            style={{ color: Colors.Text.White }}
          ></Input>
        </View>
        <View>
          <SmallText>Price for 1 unit of energy:</SmallText>
          <Input
            id="energyPriceInput"
            onChangeText={handlePriceChange}
            value={energyPrice}
            style={{ color: Colors.Text.White }}
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
            onPress={async () =>
              await createSellOffer(energyToSell, energyPrice)
            }
            buttonStyle={{
              backgroundColor: Colors.Background.White,
              borderWidth: 0,
              borderRadius: 30,
            }}
          />
        </View>
      </SafeAreaView>
    </Container>
  );
};

export default CreateSellOffer;
