import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SearchStack from "./SearchStack";
import Favorites from "../screens/Favorite";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator  screenOptions={{tabBarStyle: {backgroundColor: 'rgba(128,128,128,255)',position: 'absolute'},tabBarActiveTintColor: '#FFF',tabBarInactiveTintColor: '#000'}}>
      <Tab.Screen name="Home" component={SearchStack} options={{ header: () => null, tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ), }} />
      <Tab.Screen name="Favorite" component={Favorites} options={{ header: () => null, tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="heart" color={color} size={size}  />
          ), }} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;