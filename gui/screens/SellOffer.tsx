import { View, Text, Alert } from 'react-native'
import React from 'react'
import { RouteProp, useRoute } from '@react-navigation/native'
import { RootStackParamList } from '../navigator/RootNavigator'
import { BigText, Container } from '../components/shared'
import { Button } from '@rneui/themed'
import { createOfferStyle } from '../styles/styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import {signContract} from "../requests/contracts";

type SellOfferRouteProp = RouteProp<RootStackParamList, 'ShowSellOffer'>
const SellOffer = () => {
  const {params: {offer}} = useRoute<SellOfferRouteProp>()
  return (
    <Container>
      <SafeAreaView>
        <View>
          <BigText>ID: {offer.ID}</BigText>
          <BigText>Name: {offer.Name}</BigText>
          <BigText>Offerer: {offer.Offerer}</BigText>
          <BigText>Price: {offer.Price}</BigText>
          <BigText>Amount: {offer.maxAmount}</BigText>
            <BigText>EffectiveDate: {offer.effectiveDate}</BigText>
        </View>
        <View>
          <Button
            size = "lg"
            title="Confirm"
            titleStyle={createOfferStyle.titleStyle}
            buttonStyle={createOfferStyle.buttonStyle}
            onPress={() => {Alert.alert("Confirmation", "Are you sure?" + offer.ID, [
              {text: "Yes", onPress: async () => {await signContract(offer.ID)}, style: 'default'},
              {text: "No", onPress: () => {}, style: 'cancel'}
          ])}}/>
        </View>
      </SafeAreaView>
    </Container>
  )
}

export default SellOffer