import { StyleSheet, View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { Container } from '../components/shared';
import { colors } from '../components/colors';
import { Button } from '@rneui/themed';
import { SmallText, BigText } from '../components/shared';

const BuyScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Container>
      <SafeAreaView>
          <BigText>Buy energy</BigText>
          <View>
            <SmallText>Show available sell offers</SmallText>
            <Button onPress={() => navigation.navigate('ShowSell')}
              size = "lg"
              title="Show offers"
              titleStyle={{color: colors.secondary}}
              buttonStyle={{
                backgroundColor: 'white',
                borderWidth: 0,
                borderRadius: 30,
                }}/>
          </View>
          <View>
            <SmallText>Create new buy offer</SmallText>
            <Button onPress={() => navigation.navigate('CreateBuy')}
              size = "lg"
              title="Create offer"
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

export default BuyScreen
