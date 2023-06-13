import axios from 'axios'
import { apiIP } from './config'

export const createBuyOffer = async (amount: string, price: string) => {
    console.log("Creating offer:" + amount + " for " + price + " ecoins")
    await axios.get(apiIP + `/create/offer/${amount}/${price}`)
    .then(res => {
        console.log(res.data)
    })
    .catch((e) => {
        console.log(e)
    })
}

