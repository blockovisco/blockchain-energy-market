import {View, Text, StyleSheet} from 'react-native'
import React, {useState} from 'react'
import { Container, SmallText } from '../../shared/shared'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Input } from '@rneui/themed'
import { colors } from '../../shared/colors'
import {createSellOffer} from "../../requests/createRequests";
import {createOfferStyle} from "../../shared/styles";

const CreateSellOffer = () => {
    const [energyToSell, setEnergyToSell] = useState('')
    const [energyPrice, setEnergyPrice] = useState('')

    const handleAmountChange = (text: string) => {
        setEnergyToSell(text)
    }

    const handlePriceChange = (text: string) => {
        setEnergyPrice(text)
    }

  return (
    <Container>
      <SafeAreaView>
          <View>
            <SmallText>Amount of energy to sell:</SmallText>
            <Input id="energySellInput" onChangeText={handleAmountChange} value={energyToSell} style={createOfferStyle.inputText}></Input>
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
              onPress={async () => await createSellOffer(energyToSell, energyPrice)}
              buttonStyle={createOfferStyle.buttonStyle}/>

          </View>
      </SafeAreaView>
    </Container>
  )
}

export default CreateSellOffer