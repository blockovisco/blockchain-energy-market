import {StyleSheet} from "react-native";
import {colors} from "../components/colors";

export const createOfferStyle = StyleSheet.create({
    inputText: {
        color: "white"
    },
    titleStyle: {
        color: colors.secondary
    },
    buttonStyle: {
        backgroundColor: 'white',
        borderWidth: 0,
        borderRadius: 30
    }
});

export const listOffersStyle = StyleSheet.create({
    offerList: {
        padding: 10,
    },
    offerListElement: {
        fontSize: 20,
        color: "white"
    },
    offerFlatList: {
        backgroundColor: "#091238"
    }
});
