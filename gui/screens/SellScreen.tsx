import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BigText, Container, SmallText } from '../shared/shared';
import { colors } from '../shared/colors';
import styled from 'styled-components/native';
import { Button } from '@rneui/themed';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabStackParamList } from '../navigator/TabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigator/RootNavigator';

export type SellScreenNavigationProp = CompositeNavigationProp<BottomTabNavigationProp<TabStackParamList, 
  'SellScreen'>, NativeStackNavigationProp<RootStackParamList>>

const SellScreen = () => {
  const navigation = useNavigation<SellScreenNavigationProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Sell energy",
      headerStyle: {
        backgroundColor: colors.secondary,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 30,
      },
    });
  }, []);

  return (
    <Container>
      <SafeAreaView>
            <View>
              <SmallText>Show available buy offers</SmallText>
              <Button onPress={() => navigation.navigate('ShowBuy')}
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
              <SmallText>Create new sell offer</SmallText>
              <Button onPress={() => navigation.navigate('CreateSell')}
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

export default SellScreen