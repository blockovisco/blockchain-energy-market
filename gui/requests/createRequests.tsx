import axios from 'axios'
import { apiIP } from './config'
import {ToastAndroid} from "react-native";

export const createBuyOffer = async (amount: string, price: string) => {
    console.log("Creating buy offer:" + amount + " for " + price + " ecoins")
    await axios.get(apiIP + `/create/offer/${amount}/${price}`)
    .then(res => {
        console.log(res.data)
        ToastAndroid.show("Offer was successfully added!", ToastAndroid.SHORT)
    })
    .catch((e) => {
        console.log(e)
        ToastAndroid.show("An error occured!", ToastAndroid.SHORT)
    })

}

export const createSellOffer = async (amount: string, price: string) => {
    console.log("Creating sell offer:" + amount + " for " + price + " ecoins")
    await axios.get(apiIP + `/create/offer/${amount}/${price}`)
        .then(res => {
            console.log(res.data)
            ToastAndroid.show("Offer was successfully added!", ToastAndroid.SHORT)
        })
        .catch((e) => {
            console.log(e)
            ToastAndroid.show("An error occured!", ToastAndroid.SHORT)
        })
}

