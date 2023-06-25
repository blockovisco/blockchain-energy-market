import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabStackParamList } from '../navigator/TabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigator/RootNavigator';
import { listAllOffers } from '../requests/fetchRequests';
import { Offer } from '../domain/offer';
import { listOffersStyle } from '../styles/styles';

export type ShowSellScreenNavigationProp = CompositeNavigationProp<BottomTabNavigationProp<TabStackParamList>, NativeStackNavigationProp<RootStackParamList, 'ShowSell'>>

const ShowSellOffers = () => {
  const navigation = useNavigation<ShowSellScreenNavigationProp>();
  const data = listAllOffers();
  
  const renderItem = ({item}:{item:Offer}) => {
    return (
      <TouchableOpacity style={listOffersStyle.offerList} onPress={() => navigation.navigate('ShowSellOffer', {offer: item})}>
        <Text style={listOffersStyle.offerListElement}>Amount: {item.Amount}</Text>
        <Text style={listOffersStyle.offerListElement}>Price: {item.Price}</Text>
        <Text style={listOffersStyle.offerListElement}>Offerer: {item.Offerer}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      style={listOffersStyle.offerFlatList}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.ID}
    />
  );
}

export default ShowSellOffers