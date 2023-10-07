import React from "react";
import { Text, FlatList, TouchableOpacity } from "react-native";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { RootStackParamList } from "../../navigator/RootNavigator";
import { Offer } from "../../../domain/offer";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TabStackParamList } from "../../navigator/TabNavigator";
import { Colors } from "../../../colors";

export type ShowBuyScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList>,
  NativeStackNavigationProp<RootStackParamList, "ShowBuy">
>;

const ShowBuyOffers = () => {
  const navigation = useNavigation<ShowBuyScreenNavigationProp>();

  const renderItem = ({ item }: { item: Offer }) => {
    return (
      <TouchableOpacity
        style={{
          padding: 10,
          backgroundColor: Colors.Background.White,
          borderRadius: 10,
          margin: 10,
        }}
        onPress={() => navigation.navigate("ShowSellOffer", { offer: item })}
      >
        <Text
          style={{
            fontSize: 20,
            color: Colors.Text.Primary,
            paddingLeft: 10,
          }}
        >
          Amount: {item.amount}
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: Colors.Text.Primary,
            paddingLeft: 10,
          }}
        >
          Price: {item.Price}
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: Colors.Text.Primary,
            paddingLeft: 10,
          }}
        >
          Offerer: {item.Offerer}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      style={{ backgroundColor: Colors.Background.Primary }}
      data={[]}
      renderItem={renderItem}
      keyExtractor={(item) => item.ID}
    />
  );
};

export default ShowBuyOffers;
