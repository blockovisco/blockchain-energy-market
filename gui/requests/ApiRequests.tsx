import axiosConfig from "./axiosConfig";

export class ApiRequests {

    static getAccountBalance = async () => {
        return await axiosConfig.get(`/ecoins`)

    }
}