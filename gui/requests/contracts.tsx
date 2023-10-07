import axios from "axios";
import { apiAddOfferToPeerContractUrl, apiGetPeerContractUrl } from "./apiURLs";
import { Alert } from "react-native";

export const signContract = async (idOffer: string) => {
  await axios
    .get(apiGetPeerContractUrl())
    .then((res) => res)
    .catch((e) => {
      console.log(e);
      Alert.alert("Buying offer failed", "An error occured", [{ text: "OK" }]);
    });

  await axios
    .get(apiAddOfferToPeerContractUrl(idOffer))
    .then((res) => res)
    .catch((e) => {
      console.log(e);
      Alert.alert("Buying offer failed", "An error occured", [{ text: "OK" }]);
    });

  Alert.alert("Success", "Successfully signed the contract", [{ text: "OK" }]);
};
