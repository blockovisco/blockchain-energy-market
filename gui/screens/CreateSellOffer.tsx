import { View, Text } from 'react-native'
import React, {useState} from 'react'
import { Container, SmallText } from '../components/shared'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Input } from '@rneui/themed'
import { colors } from '../components/colors'
import {createBuyOffer, createSellOffer} from "../requests/createRequests";

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
                <Input id="energySellInput" onChangeText={handleAmountChange} value={energyToSell}></Input>
              </View>
              <View>
                <SmallText>Price for 1 unit of energy:</SmallText>
                <Input id="energyPriceInput" onChangeText={handlePriceChange} value={energyPrice}></Input>
              </View>
              <View>
                <Button
                  size = "lg"
                  title="Confirm"
                  titleStyle={{color: colors.secondary}}
                  onPress={async () => await createSellOffer(energyToSell, energyPrice)}
                  buttonStyle={{
                    backgroundColor: 'white',
                    borderWidth: 0,
                    borderRadius: 30,
                    }}/>

              </View>
          </SafeAreaView>
        </Container>
  )
}

export default CreateSellOffer