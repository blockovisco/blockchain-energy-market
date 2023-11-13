import axiosConfig from "./axiosConfig";

export class ApiRequests {
  static getAccountBalance = async () => {
    // returns one number of account balance
    return await axiosConfig.get(`/ecoins`);
  };

  static getMaximumPrice = async () => {
    return await axiosConfig.get("/maxPrice");
  };

  static getMinimumPrice = async () => {
    return await axiosConfig.get("/minPrice");
  };

  static getConsumedEnergy = async () => {
    // returns the list of energy assets
    return await axiosConfig.get(`/consumedEnergy`);
  };

  static getProducedEnergy = async () => {
    // returns the list of energy assets
    return await axiosConfig.get(`/producedEnergy`);
  };

  static getAllSellOffers = async () => {
    return await axiosConfig.get(`/offers`);
  };

  // posts

  static createSellOffer = async (amount: string, price: string) => {
    return await axiosConfig.post(`/offer/${amount}/${price}`);
  };

  static executeOffer = async (offerId: string) => {
    return await axiosConfig.post(`/offer/${offerId}`);
  };

  static setMaxPrice = async (maxPrice: string) => {
    return await axiosConfig.post(`/maxPrice/${maxPrice}`);
  };
  static setMinPrice = async (minPrice: string) => {
    return await axiosConfig.post(`/minPrice/${minPrice}`);
  };
}
