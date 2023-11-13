import { useQuery } from "@tanstack/react-query";
import { ApiRequests } from "../requests/ApiRequests";

export const useGetConsumedEnergy = () => {
  return useQuery({
    queryKey: ["Get consumed energy"],
    queryFn: getConsumedEnergy,
    onSuccess(data) {
      console.log("consumed energy", data);
    },
  });
};

const getConsumedEnergy = async () => {
  return await ApiRequests.getConsumedEnergy()
    .then((response) => {
      return response.data.consumedEnergy;
    })
    .catch((e: Error) => {
      console.log("getConsumedEnergy", e.message);
    });
};

export const useGetProducedEnergy = () => {
  return useQuery({
    queryKey: ["Get produced energy"],
    queryFn: getProducedEnergy,
    onSuccess(data) {
      console.log("produced energy", data);
    },
  });
};

const getProducedEnergy = async () => {
  return await ApiRequests.getProducedEnergy()
    .then((response) => {
      return response.data.producedEnergy;
    })
    .catch((e: Error) => {
      console.log("getProducedEnergy", e.message);
    });
};
