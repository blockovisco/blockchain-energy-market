import {Offer} from "../domain/offer";
import {useState} from "react";
import axios from "axios";
import {apiIP} from "./config";
import {apiAddOfferToPeerContractUrl, apiGetPeerContractUrl} from "./apiURLs";
import {Alert} from "react-native";

export const signContract = async (idOffer: string) => {
    await axios
        .get(apiGetPeerContractUrl())
        .then(res => {})
        .catch((e) => {
            console.log(e)
            Alert.alert("Buying offer failed", "An error occured", [
                {text: "OK"}
            ])
        })

    await axios
        .get(apiAddOfferToPeerContractUrl(idOffer))
        .then(res => {})
        .catch((e) => {
            console.log(e)
            Alert.alert("Buying offer failed", "An error occured", [
                {text: "OK"}
            ])
        })

    Alert.alert("Success","Successfully signed the contract", [
        {text: "OK"}
    ])
}

