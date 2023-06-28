import axios from 'axios'
import { apiIP } from './config'
import { Offer } from '../domain/offer'
import { useEffect, useState } from 'react'
import {apiGetAllOffersUrl, apiGetPeerContractUrl} from "./apiURLs";
import {PeerContract} from "../domain/PeerContract";

export const listAllOffers = (): Offer[] => {
    const [data, setData]: [Offer[], (data: Offer[]) => void] = useState([new Offer("","", 0, 0, "", "today")]);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios
        .get<Offer[]>(apiGetAllOffersUrl())
        .then((response) => setData(response.data))
        .catch((error) => setError(error.message))
        .finally(() => setLoaded(true));
    }, []);

    return data;
}

export const listAllPeerContracts = (): Array<string> => {
    const [data, setData]: [PeerContract, (data: PeerContract) => void] = useState(new PeerContract("0", "noone", []));
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios
            .get<PeerContract>(apiGetPeerContractUrl())
            .then((response) => setData(response.data))
            .catch((error) => setError(error.message))
            .finally(() => setLoaded(true));
    }, []);

    return data.Contracts;
}

