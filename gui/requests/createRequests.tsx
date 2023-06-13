import axios from 'axios'

export const createBuyOffer = async (amount: string, price: string) => {
    console.log("Creating offer:" + amount + " for " + price + " ecoins")
    await axios.get(`http://192.168.0.104:6060/create/offer/${amount}/${price}`)
    .then(res => {
        console.log(res.data)
    })
    .catch((e) => {
        console.log(e)
    })
}