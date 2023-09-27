import {StyleSheet} from "react-native";
import {colors} from "./colors";

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
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 10
    },
    offerListElement: {
        fontSize: 20,
        color: colors.secondary,
        paddingLeft: 10,
        
    },
    offerFlatList: {
        backgroundColor: colors.secondary
    }
});
