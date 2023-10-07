import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BuyScreen from "../screens/BuyScreen";
import SellScreen from "../screens/SellScreen";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import { Colors } from "../../colors";
import Home from "../screens/Home";

export type TabStackParamList = {
  Home: undefined;
  BuyScreen: undefined;
  SellScreen: undefined;
};

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === "Home") {
            return (
              <Icon
                name="home"
                type="FontAwesome5"
                color={focused ? Colors.Text.White : Colors.Text.Light}
                size={35}
              />
            );
          } else if (route.name === "BuyScreen") {
            return (
              <Icon
                name="shopping-cart"
                type="FontAwesome5"
                color={focused ? Colors.Text.White : Colors.Text.Light}
                size={35}
              />
            );
          } else if (route.name === "SellScreen") {
            return (
              <Icon
                name="attach-money"
                type="MaterialIcons"
                color={focused ? Colors.Text.White : Colors.Text.Light}
                size={35}
              />
            );
          }
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: Colors.Background.Primary,
          borderTopWidth: 5,
          borderTopColor: Colors.Background.PrimaryDark,
        },
      })}
    >
      <Tab.Screen
        options={{
          headerShown: true,
          title: "BLOCKOVISCO",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Colors.Background.Primary,
            borderBottomWidth: 5,
            borderBottomColor: Colors.Background.PrimaryDark,
            height: 120,
          },
          headerTintColor: Colors.Background.White,
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 40,
          },
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen name="BuyScreen" component={BuyScreen} />
      <Tab.Screen name="SellScreen" component={SellScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
