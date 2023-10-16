import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import ShowBuyOffers from "../screens/sell_screens/ShowBuyOffers";
import CreateBuyOffer from "../screens/buy_screens/CreateBuyOffer";
import ShowSellOffers from "../screens/buy_screens/ShowSellOffers";
import CreateSellOffer from "../screens/sell_screens/CreateSellOffer";
import { Offer } from "../../domain/offer";
import SellOffer from "../screens/buy_screens/SellOffer";
import ShowPeerContracts from "../screens/buy_screens/ShowPeerContracts";

export type RootStackParamList = {
  Main: undefined;
  ShowBuy: undefined;
  CreateBuy: undefined;
  ShowSell: undefined;
  CreateSell: undefined;
  ShowSellOffer: { offer: Offer };
  ShowPeerContracts: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name="Main" component={TabNavigator} />
      </RootStack.Group>
      <RootStack.Group>
        <RootStack.Screen
          options={{ headerShown: true, headerTitle: "Listing sell offers" }}
          name="ShowSell"
          component={ShowSellOffers}
        />
        <RootStack.Screen
          options={{ headerShown: true, headerTitle: "Create buy offer" }}
          name="CreateBuy"
          component={CreateBuyOffer}
        />
        <RootStack.Screen
          options={{ headerShown: true, headerTitle: "Listing contracts" }}
          name="ShowPeerContracts"
          component={ShowPeerContracts}
        />
      </RootStack.Group>
      <RootStack.Group>
        <RootStack.Screen
          options={{ headerShown: true, headerTitle: "Listing buy offers" }}
          name="ShowBuy"
          component={ShowBuyOffers}
        />
        <RootStack.Screen
          options={{ headerShown: true, headerTitle: "Create sell offer" }}
          name="CreateSell"
          component={CreateSellOffer}
        />
      </RootStack.Group>
      <RootStack.Group
        screenOptions={{
          presentation: "modal",
        }}
      >
        <RootStack.Screen
          options={{ headerShown: true, headerTitle: "Sell offer details" }}
          name="ShowSellOffer"
          component={SellOffer}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
