import React from "react";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
import { Colors } from "../../colors";
import Home from "../screens/Home";
import { SetPrices } from "../screens/SetPrices";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={navigationOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ size, color }) => {
            return (
              <Icon name="home" type="FontAwesome5" size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="SetPrices"
        component={SetPrices}
        options={{
          tabBarLabel: "Set prices",
          tabBarIcon: ({ size, color }) => {
            return (
              <Icon
                name="settings"
                type="FontAwesome5"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const navigationOptions: BottomTabNavigationOptions = {
  tabBarActiveTintColor: Colors.Text.White,
  tabBarInactiveTintColor: Colors.Text.Light,
  tabBarStyle: {
    backgroundColor: Colors.Background.Primary,
    borderTopWidth: 5,
    borderTopColor: Colors.Background.PrimaryDark,
  },
  tabBarLabelStyle: {
    fontSize: 15,
    fontWeight: "600",
  },
  headerTitle: "BLOCKOVISCO",
  headerTitleStyle: {
    color: Colors.Text.White,
    fontSize: 48,
    fontWeight: "800",
  },
  headerTitleAlign: "center",
  headerStyle: {
    height: 120,
    backgroundColor: Colors.Background.Primary,
    borderBottomWidth: 5,
    borderBottomColor: Colors.Background.PrimaryDark,
  },
};

export default TabNavigator;
