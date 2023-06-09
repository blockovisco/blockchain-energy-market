import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { listAllOffers } from '../requests/fetchRequests'
import {listOffersStyle} from "../styles/styles";
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigator/RootNavigator';
import { SellScreenNavigationProp } from './SellScreen';
import { Offer } from '../domain/offer';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TabStackParamList } from '../navigator/TabNavigator';

export type ShowBuyScreenNavigationProp = CompositeNavigationProp<BottomTabNavigationProp<TabStackParamList>, NativeStackNavigationProp<RootStackParamList, 'ShowBuy'>>

const ShowBuyOffers = () => {
  const navigation = useNavigation<ShowBuyScreenNavigationProp>();
  const data = {};
  
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

export default ShowBuyOffers