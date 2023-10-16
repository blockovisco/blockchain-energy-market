import { useQuery } from "@tanstack/react-query";
import { ApiRequests } from "../requests/ApiRequests";

export const useGetAccountBalance = () => {
  return useQuery({
    queryKey: ["Get Account Balance"],
    queryFn: getAccountBalance,
    onSuccess(data) {
      console.log("account", data);
    },
  });
};
const getAccountBalance = async () => {
  return await ApiRequests.getAccountBalance()
    .then((response) => {
      return response.data;
    })
    .catch((e: Error) => {
      console.log("getAccountBalance", e.message);
    });
};
