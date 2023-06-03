import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import BuyScreen from '../screens/BuyScreen';
import SellScreen from '../screens/SellScreen';
import { useNavigation } from "@react-navigation/native"
import { Icon } from '@rneui/themed';

export type TabStackParamList = {
  Buy: undefined;
  Sell: undefined;
}

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Tab.Navigator screenOptions={({route}) => ({
      tabBarIcon: ({ focused, color, size}) => {
        if ( route.name === 'Buy'){
          return (
            <Icon
            name='shopping-cart'
            type='FontAwesome5'
            color={focused ? '#517fa4' : "gray"}
          />
          );
        } else if (route.name === 'Sell'){
          return (
            <Icon
            name='attach-money'
            type='MaterialIcons'
            color={focused ? '#517fa4' : "gray"}
          />
          );
        }
      },
    })}
    >
      <Tab.Screen name="Buy" component={BuyScreen}/>
      <Tab.Screen name="Sell" component={SellScreen}/>
    </Tab.Navigator>
  )
}

export default TabNavigator