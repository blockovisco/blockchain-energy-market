import { useMutation, useQuery } from "@tanstack/react-query"
import { ApiRequests } from "../requests/ApiRequests"

export const useGetMinimumPrice = () => {
    return useQuery({
        queryKey: ["get minimum price"],
        queryFn: getMinimumPrice,
        onSuccess: (data) => {
            console.log("minPrice", data)
        }
    })
}

const getMinimumPrice = async () => {
    return await ApiRequests.getMinimumPrice()
        .then(response => response.data.minPrice)
        .catch(e => {
            console.error(e)
        })
}

export const useSetMinimumPrice = () =>
    useMutation(
        {
            mutationKey: ["set minimum Price"],
            mutationFn: ({ minPrice }: { minPrice: string }) => ApiRequests.setMaxPrice(minPrice)
        }
    )