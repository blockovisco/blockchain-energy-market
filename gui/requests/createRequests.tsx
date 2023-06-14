import axios from 'axios'
import { apiIP } from './config'
import {Alert, ToastAndroid} from "react-native";
import {Offer} from "../domain/offer";

export const createBuyOffer = async (amount: string, price: string) => {
    console.log("Creating buy offer:" + amount + " for " + price + " ecoins")
    await axios.get(apiIP + `/create/offer/${amount}/${price}`)
    .then(res => {
        console.log(res.data)
        const addedOffer = new Offer(res.data.ID, res.data.Name, res.data.Price, res.data.Amount, res.data.Offerer)
        const alertMessage = `New buy offer has been added:\nAmount: ${addedOffer.Amount}\nPrice: ${addedOffer.Price}`
        Alert.alert("Offer added successfully", alertMessage, [
            {text: "OK"}
        ])
    })
    .catch((e) => {
        console.log(e)
        Alert.alert("Offer adding failed", "An error occurred while adding a new offer", [
            {text: "OK"}
        ])
    })

}

export const createSellOffer = async (amount: string, price: string) => {
    console.log("Creating sell offer:" + amount + " for " + price + " ecoins")
    await axios.get(apiIP + `/create/offer/${amount}/${price}`)
        .then(res => {
            console.log(res.data)
            const addedOffer = new Offer(res.data.ID, res.data.Name, res.data.Price, res.data.Amount, res.data.Offerer)
            const alertMessage = `New buy offer has been added:\nAmount: ${addedOffer.Amount}\nPrice: ${addedOffer.Price}`
            Alert.alert("Offer added successfully", alertMessage, [
                {text: "OK"}
            ])
        })
        .catch((e) => {
            console.log(e)
            Alert.alert("Offer adding failed", "An error occurred while adding a new offer", [
                {text: "OK"}
            ])
        })
}

