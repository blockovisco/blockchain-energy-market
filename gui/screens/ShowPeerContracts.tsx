import {useNavigation} from "@react-navigation/native";
import {listAllOffers, listAllPeerContracts} from "../requests/fetchRequests";
import {Offer} from "../domain/offer";
import {FlatList, Text, TouchableOpacity} from "react-native";
import {listOffersStyle} from "../styles/styles";
import React from "react";
import {ShowSellScreenNavigationProp} from "./ShowSellOffers";

const ShowPeerContracts = () => {
    const data = listAllPeerContracts();

    const renderItem = ({item}:{item:string}) => {
        return (
            <TouchableOpacity style={listOffersStyle.offerList}>
                <Text style={listOffersStyle.offerListElement}>Offer: {item}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <FlatList
            style={listOffersStyle.offerFlatList}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item}
        />
    );
}

export default ShowPeerContracts