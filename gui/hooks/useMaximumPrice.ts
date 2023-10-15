import { useMutation, useQuery } from "@tanstack/react-query"
import { ApiRequests } from "../requests/ApiRequests";

export const useGetMaximumPrice = () => {
    return useQuery({
        queryKey: ["get max price"],
        queryFn: getMaximumPrice,
        onSuccess: (data) => {
            console.log("maxPrice", data)
        }
    })
}
const getMaximumPrice = async () => {
    return await ApiRequests.getMaximumPrice()
        .then(response => response.data.maxPrice)
        .catch(err => {
            console.error(err)
        })
}

export const useSetMaximumPrice = () =>
    useMutation(
        {
            mutationKey: ["set maximum Price"],
            mutationFn: ({ maxPrice }: { maxPrice: string }) => ApiRequests.setMaxPrice(maxPrice)
        }
    )