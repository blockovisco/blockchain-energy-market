import { View, Text, RootTagContext } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import ShowBuyOffers from '../screens/ShowBuyOffers';
import CreateBuyOffer from '../screens/CreateBuyOffer';
import ShowSellOffers from '../screens/ShowSellOffers';
import CreateSellOffer from '../screens/CreateSellOffer';
import { Offer } from '../domain/offer';
import SellOffer from '../screens/SellOffer';

export type RootStackParamList = {
    Main: undefined;
    ShowBuy: undefined;
    CreateBuy: undefined;
    ShowSell: undefined;
    CreateSell: undefined;
    ShowSellOffer: {offer: Offer};
}

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
        <RootStack.Group>
            <RootStack.Screen name="Main" component={TabNavigator}/>
        </RootStack.Group>
        <RootStack.Group>
            <RootStack.Screen name="ShowSell" component={ShowSellOffers}/>
            <RootStack.Screen name="CreateBuy" component={CreateBuyOffer}/>
        </RootStack.Group>
        <RootStack.Group>
            <RootStack.Screen name="ShowBuy" component={ShowBuyOffers}/>
            <RootStack.Screen name="CreateSell" component={CreateSellOffer}/>
        </RootStack.Group>
        <RootStack.Group screenOptions={{
            presentation: "modal",
        }}>
            <RootStack.Screen options={{headerShown: true}} name="ShowSellOffer" component={SellOffer}/>
        </RootStack.Group>
    </RootStack.Navigator>
  )
}

export default RootNavigator