import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { listAllOffers } from '../requests/fetchRequests'
import {listOffersStyle} from "../styles/styles";

const ShowBuyOffers = () => {
  const data = listAllOffers();
  
  const renderItem = ({item}) => {
    return (
      <View style={listOffersStyle.offerList}>
        <Text style={listOffersStyle.offerListElement}>Amount: {item.Amount}</Text>
        <Text style={listOffersStyle.offerListElement}>Price: {item.Price}</Text>
        <Text style={listOffersStyle.offerListElement}>Offerer: {item.Offerer}</Text>
      </View>
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