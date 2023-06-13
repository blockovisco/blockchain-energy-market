import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { listAllOffers } from '../requests/fetchRequests'
import { Offer } from '../domain/offer'
import { apiIP } from '../requests/config'
import { StyleSheet } from 'react-native'

const ShowBuyOffers = () => {
  const data = listAllOffers();
  
  const renderItem = ({ item }) => {
    return (
      <View style={styles.offerList}>
        <Text style={styles.offerListElement}>Amount: {item.Amount}</Text>
        <Text style={styles.offerListElement}>Price: {item.Price}</Text>
        <Text style={styles.offerListElement}>Offerer: {item.Offerer}</Text>
      </View>
    );
  };

  return (
    <FlatList
      style={styles.offerFlatList}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.ID}
    />
  );
  
}

const styles = StyleSheet.create({
  offerList: {
    padding: 10,
  },
  offerListElement: {
    fontSize: 20,
    color: "white"
  },
  offerFlatList: {
    backgroundColor: "#091238"
  }
});

export default ShowBuyOffers