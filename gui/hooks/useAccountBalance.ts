import { useQuery } from "@tanstack/react-query";
import { ApiRequests } from "../requests/ApiRequests";

export const useGetAccountBalance = () => {
  return useQuery({
    queryKey: ["Get Account Balance"],
    queryFn: getAccountBalance,
    onError: (err) => {
      console.log(err);
    },
  });
};
const getAccountBalance = async () => {
  return await ApiRequests.getAccountBalance().then(
    (response) => response.data
  );
};
