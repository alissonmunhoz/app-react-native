import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import SearchScreen from "../screens/SearchScreen";
import FilmDetails from "../screens/FilmDetails";
import Favorites from "../screens/Favorite";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();





const SearchStack = () => {
  return (

   

    <Stack.Navigator initialRouteName="Search">
    <Stack.Screen
         options={{ header: () => null }}
         name="Search"
         component={SearchScreen}
     />
       <Stack.Screen
         options={{ header: () => null }}
         name="FilmDetails"
       component={FilmDetails}
       />
     </Stack.Navigator>
  );
};

export default SearchStack;

const styles = StyleSheet.create({});
