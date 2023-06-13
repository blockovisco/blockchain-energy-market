import axios from 'axios'
import { apiIP } from './config'
import { Offer } from '../domain/offer'
import { useEffect, useState } from 'react'

export const listAllOffers = (): Offer[] => {
    const [data, setData]: [Offer[], (data: Offer[]) => void] = useState([new Offer("","", 0, 0, "")]);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios
        .get<Offer[]>(apiIP + `/offers`)
        .then((response) => setData(response.data))
        .catch((error) => setError(error.message))
        .finally(() => setLoaded(true));
    }, []);

    return data;
}

