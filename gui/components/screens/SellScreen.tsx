import { View } from "react-native";
import React, { useLayoutEffect } from "react";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@rneui/themed";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "../navigator/TabNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigator/RootNavigator";
import { Colors } from "../../colors";
import { Container } from "../shared/Container";
import { SmallText } from "../shared/StyledText";

export type SellScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "SellScreen">,
  NativeStackNavigationProp<RootStackParamList>
>;

const SellScreen = () => {
  const navigation = useNavigation<SellScreenNavigationProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Sell energy",
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
          <SmallText>Show available buy offers</SmallText>
          <Button
            onPress={() => navigation.navigate("ShowBuy")}
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
          <SmallText>Create new sell offer</SmallText>
          <Button
            onPress={() => navigation.navigate("CreateSell")}
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
      </SafeAreaView>
    </Container>
  );
};

export default SellScreen;
