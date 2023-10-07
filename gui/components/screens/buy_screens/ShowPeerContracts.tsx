import { FlatList, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../../../colors";

const ShowPeerContracts = () => {
  const renderItem = ({ item }: { item: string }) => {
    return (
      <TouchableOpacity style={offerList}>
        <Text style={offerListElement}>Offer: {item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      style={{
        backgroundColor: Colors.Background.Primary,
      }}
      data={null}
      renderItem={renderItem}
      keyExtractor={(item) => item}
    />
  );
};

const offerList = {
  padding: 10,
  backgroundColor: Colors.Background.White,
  borderRadius: 10,
  margin: 10,
};

const offerListElement = {
  fontSize: 20,
  color: Colors.Text.Primary,
  paddingLeft: 10,
};

export default ShowPeerContracts;
