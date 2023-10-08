import { useQuery } from "@tanstack/react-query";
import { ApiRequests } from "../requests/ApiRequests";

export const useGetEnergyBalance = () => {
  return useQuery({
    queryKey: ["Get energy balance"],
    queryFn: getEnergyBalance,
    onSuccess(data) {
      console.log("energy", data);
    },
  });
};

const getEnergyBalance = async () => {
  return await ApiRequests.getEnergyList()
    .then((response) => {
      const energyList = response.data;
      if (energyList.length != 1) {
        console.log(
          "Warning! Energy assets list length is not equal to 1! Fetched value is probably wrong"
        );
      }
      return energyList[0].Amount;
    })
    .catch((e: Error) => {
      console.log("getEnergyBalance", e.message);
    });
};
