import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import BuyScreen from '../screens/BuyScreen';
import SellScreen from '../screens/SellScreen';
import { useNavigation } from "@react-navigation/native"
import { Icon } from '@rneui/themed';
import { colors } from '../components/colors';

export type TabStackParamList = {
  BuyScreen: undefined;
  SellScreen: undefined;
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
        if ( route.name === 'BuyScreen'){
          return (
            <Icon
            name='shopping-cart'
            type='FontAwesome5'
            color={focused ? colors.secondary : "gray"}
          />
          );
        } else if (route.name === 'SellScreen'){
          return (
            <Icon
            name='attach-money'
            type='MaterialIcons'
            color={focused ? colors.secondary : "gray"}
          />
          );
        }
      },
    })}
    >
      <Tab.Screen name="BuyScreen" component={BuyScreen}/>
      <Tab.Screen name="SellScreen" component={SellScreen}/>
    </Tab.Navigator>
  )
}

export default TabNavigator