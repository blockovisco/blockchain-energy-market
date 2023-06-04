import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BigText, Container, SmallText } from '../components/shared';
import { colors } from '../components/colors';
import styled from 'styled-components/native';
import { Button } from '@rneui/themed';

const BuyContainer = styled(Container)`
    background-color: ${colors.secondary};
`;

const SellScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <BuyContainer>
      <SafeAreaView>
        <BigText>Sell energy</BigText>
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
    </BuyContainer>
  )
}

export default SellScreen