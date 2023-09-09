import { View, Text, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'
import React, { useState } from 'react'
import { Container, SmallText } from '../../shared/shared'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Input } from '@rneui/themed'
import { colors } from '../../shared/colors'
import { createBuyOffer } from '../../requests/createRequests'
import {createOfferStyle} from "../../shared/styles";

const CreateBuyOffer = () => {
  const [energyToBuy, setEnergyToBuy] = useState('')
  const [energyPrice, setEnergyPrice] = useState('')

  const handleAmountChange = (text: string) => {
    setEnergyToBuy(text)
  }

  const handlePriceChange = (text: string) => {
    setEnergyPrice(text)
  }

  return (
    <Container>
      <SafeAreaView>
          <View>
            <SmallText>Amount of energy to buy:</SmallText>
            <Input id="energyBuyInput" onChangeText={handleAmountChange} value={energyToBuy} style={createOfferStyle.inputText}></Input>
          </View>
          <View>
            <SmallText>Price for 1 unit of energy:</SmallText>
            <Input id="energyPriceInput" onChangeText={handlePriceChange} value={energyPrice} style={createOfferStyle.inputText}></Input>
          </View>
          <View>
            <Button
              size = "lg"
              title="Confirm"
              titleStyle={createOfferStyle.titleStyle}
              buttonStyle={createOfferStyle.buttonStyle}
              onPress={async () => await createBuyOffer(energyToBuy, energyPrice)}/>
          </View>
      </SafeAreaView>
    </Container>
  )
}

export default CreateBuyOffer