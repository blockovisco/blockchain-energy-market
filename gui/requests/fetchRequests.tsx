import axios from 'axios'
import { apiIP } from './config'
import { Offer } from '../domain/offer'
import { useEffect, useState } from 'react'

export const listAllOffers = (): Offer[] => {
    const [data, setData]: [Offer[], (data: Offer[]) => void] = useState([new Offer("","", 0, 0, "")]);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // axios
        // .get<Offer[]>(apiIP + `/offers`)
        // .then((response) => setData(response.data))
        // .catch((error) => setError(error.message))
        // .finally(() => setLoaded(true));
        setData([
            {
				ID: "1",
                Name: 'offer',
                Price: 1,
                Amount: 2,
                Offerer: "offerer",
			},
            {
				ID: "2",
                Name: 'offer',
                Price: 2,
                Amount: 3,
                Offerer: "offerer",
			},
            {
				ID: "3",
                Name: 'offer',
                Price: 3,
                Amount: 4,
                Offerer: "offerer",
			},
            {
				ID: "4",
                Name: 'offer',
                Price: 5,
                Amount: 6,
                Offerer: "offerer",
			},
            {
				ID: "6",
                Name: 'offer',
                Price: 5,
                Amount: 6,
                Offerer: "offerer",
			},
            {
				ID: "7",
                Name: 'offer',
                Price: 5,
                Amount: 6,
                Offerer: "offerer",
			},
            {
				ID: "8",
                Name: 'offer',
                Price: 5,
                Amount: 6,
                Offerer: "offerer",
			},
        ])
    }, []);

    return data;
}

