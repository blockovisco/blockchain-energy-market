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
}