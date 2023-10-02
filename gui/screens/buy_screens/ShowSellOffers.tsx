import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, {useEffect, useState} from 'react'
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabStackParamList } from '../../navigator/TabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/RootNavigator';
import { Offer } from '../../domain/offer';
import { listOffersStyle } from '../../shared/styles';
import {ApiRequests} from "../../requests/ApiRequests";

export type ShowSellScreenNavigationProp = CompositeNavigationProp<BottomTabNavigationProp<TabStackParamList>, NativeStackNavigationProp<RootStackParamList, 'ShowSell'>>

const ShowSellOffers = () => {
  const navigation = useNavigation<ShowSellScreenNavigationProp>();

  const [offers, setOffers] = useState([])

    // FETCHES

    const getAllOffers = async () => {
      ApiRequests.getAllSellOffers().then((result) => {
          let offers = result.data
          setOffers(offers);
      }).catch((e) => {
          console.log(e)
      })
    }

    useEffect(() => {
        getAllOffers().then(r => r)
    }, [])
  
  const renderItem = ({item}:{item:Offer}) => {
    return (
      <TouchableOpacity style={listOffersStyle.offerList} onPress={() => navigation.navigate('ShowSellOffer', {offer: item})}>
        <Text style={listOffersStyle.offerListElement}>Amount: {item.amount}</Text>
        <Text style={listOffersStyle.offerListElement}>Price: {item.Price}</Text>
        <Text style={listOffersStyle.offerListElement}>Offerer: {item.Offerer}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      style={listOffersStyle.offerFlatList}
      data={offers}
      renderItem={renderItem}
      keyExtractor={(item) => item.ID}
    />
  );
}

export default ShowSellOffers