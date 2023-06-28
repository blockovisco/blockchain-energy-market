import {apiIP} from "./config";

export const apiGetAllOffersUrl = (): string => {
    return apiIP + `/offers`
}

export const apiCreateOfferUrl = (maxAmount: number, price: number, effectiveDate: string): string => {
    return apiIP + `/offer/create/${maxAmount}/${price}/${effectiveDate}`
}

export const apiGetPeerContractUrl = () => {
    return apiIP + `/peerContracts`
}

export const apiAddOfferToPeerContractUrl = (idOffer: string) => {
    return apiIP + `/peerContracts/addContract/${idOffer}`
}