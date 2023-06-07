import { View, Text } from 'react-native'
import React from 'react'
import { Container, SmallText } from '../components/shared'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Input } from '@rneui/themed'
import { colors } from '../components/colors'

const CreateSellOffer = () => {
  return (
    <Container>
          <SafeAreaView>
              <View>
                <SmallText>Amount of energy to sell:</SmallText>
                <Input></Input>
              </View>
              <View>
                <SmallText>Price for 1 unit of energy:</SmallText>
                <Input></Input>
              </View>
              <View>
                <Button
                  size = "lg"
                  title="Confirm"
                  titleStyle={{color: colors.secondary}}
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