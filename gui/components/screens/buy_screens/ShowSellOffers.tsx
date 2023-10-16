import { Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "../../navigator/TabNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigator/RootNavigator";
import { Offer } from "../../../domain/offer";
import { ApiRequests } from "../../../requests/ApiRequests";
import { Colors } from "../../../colors";

export type ShowSellScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList>,
  NativeStackNavigationProp<RootStackParamList, "ShowSell">
>;

const ShowSellOffers = () => {
  const navigation = useNavigation<ShowSellScreenNavigationProp>();

  const [offers, setOffers] = useState([]);

  // FETCHES

  const getAllOffers = async () => {
    ApiRequests.getAllSellOffers()
      .then((result) => {
        const offers = result.data;
        setOffers(offers);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getAllOffers().then((r) => r);
  }, []);

  const renderItem = ({ item }: { item: Offer }) => {
    return (
      <TouchableOpacity
        style={offerList}
        onPress={() => navigation.navigate("ShowSellOffer", { offer: item })}
      >
        <Text style={offerListElement}>Amount: {item.amount}</Text>
        <Text style={offerListElement}>Price: {item.Price}</Text>
        <Text style={offerListElement}>Offerer: {item.Offerer}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      style={offerFlatList}
      data={offers}
      renderItem={renderItem}
      keyExtractor={(item) => item.ID}
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

const offerFlatList = {
  backgroundColor: Colors.Background.Primary,
};

export default ShowSellOffers;
