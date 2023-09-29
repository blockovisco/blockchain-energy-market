import axiosConfig from "./axiosConfig";

export class ApiRequests {

    static getAccountBalance = async () => {
        // returns one number of account balance
        return await axiosConfig.get(`/ecoins`)
    }

    static getEnergyList = async () => {
        // returns the list of energy assets
        return await axiosConfig.get(`/energy`)
    }

    static getAllSellOffers = async () => {
        return await axiosConfig.get(`/offers`)
    }

    // posts

    static createSellOffer = async (amount: string, price: string) => {
        return await axiosConfig.post(`/offer/${amount}/${price}`)
    }
}