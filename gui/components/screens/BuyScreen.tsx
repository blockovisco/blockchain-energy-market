import { View } from "react-native";
import React, { useLayoutEffect } from "react";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@rneui/themed";
import { TabStackParamList } from "../navigator/TabNavigator";
import { RootStackParamList } from "../navigator/RootNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { Colors } from "../../colors";
import { Container } from "../shared/Container";
import { SmallText } from "../shared/StyledText";

export type BuyScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "BuyScreen">,
  NativeStackNavigationProp<RootStackParamList>
>;

const BuyScreen = () => {
  const navigation = useNavigation<BuyScreenNavigationProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Buy energy",
      headerStyle: {
        backgroundColor: Colors.Background.Primary,
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 30,
      },
    });
  }, []);

  return (
    <Container>
      <SafeAreaView>
        <View>
          <SmallText>Show available sell offers</SmallText>
          <Button
            onPress={() => navigation.navigate("ShowSell")}
            size="lg"
            title="Show offers"
            titleStyle={{ color: Colors.Text.Primary }}
            buttonStyle={{
              backgroundColor: Colors.Text.White,
              borderWidth: 0,
              borderRadius: 30,
            }}
          />
        </View>
        <View>
          <SmallText>Create new buy offer</SmallText>
          <Button
            onPress={() => navigation.navigate("CreateBuy")}
            size="lg"
            title="Create offer"
            titleStyle={{ color: Colors.Text.Primary }}
            buttonStyle={{
              backgroundColor: Colors.Text.White,
              borderWidth: 0,
              borderRadius: 30,
            }}
          />
        </View>
        <View>
          <SmallText>Show your contracts</SmallText>
          <Button
            onPress={() => navigation.navigate("ShowPeerContracts")}
            size="lg"
            title="Show contracts"
            titleStyle={{ color: Colors.Text.Primary }}
            buttonStyle={{
              backgroundColor: Colors.Text.White,
              borderWidth: 0,
              borderRadius: 30,
            }}
          />
        </View>
      </SafeAreaView>
    </Container>
  );
};

export default BuyScreen;
