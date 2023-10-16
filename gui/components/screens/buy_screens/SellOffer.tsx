import { View, Alert } from "react-native";
import React from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../navigator/RootNavigator";
import { Button } from "@rneui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { ApiRequests } from "../../../requests/ApiRequests";
import { BigText } from "../../shared/StyledText";
import { Container } from "../../shared/Container";

type SellOfferRouteProp = RouteProp<RootStackParamList, "ShowSellOffer">;
const SellOffer = () => {
  const {
    params: { offer },
  } = useRoute<SellOfferRouteProp>();

  const executeOffer = async (offerId: string) => {
    await ApiRequests.executeOffer(offerId);
  };

  return (
    <Container>
      <SafeAreaView>
        <View>
          <BigText>ID: {offer.ID}</BigText>
          <BigText>Name: {offer.Name}</BigText>
          <BigText>Offerer: {offer.Offerer}</BigText>
          <BigText>Price: {offer.Price}</BigText>
          <BigText>Amount: {offer.amount}</BigText>
        </View>
        <View>
          <Button
            size="lg"
            title="Confirm"
            titleStyle={{}}
            buttonStyle={{}}
            onPress={() => {
              Alert.alert("Confirmation", "Are you sure?" + offer.ID, [
                {
                  text: "Yes",
                  onPress: async () => {
                    await executeOffer(offer.ID);
                  },
                  style: "default",
                },
                { text: "No", onPress: () => {}, style: "cancel" },
              ]);
            }}
          />
        </View>
      </SafeAreaView>
    </Container>
  );
};

export default SellOffer;
