import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { Provider as ReduxProvider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import store from "./redux/store"
import { Colors } from "./theme/colors";
import SearchStack from "./navigation/SearchStack";
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchScreen from "./screens/SearchScreen";
import BottomTabNavigator from "./navigation/Tabnavigator";

const App = () => (
  <NavigationContainer>
    <ReduxProvider store={store}>
      <StatusBar barStyle="light-content" backgroundColor={'grey'} />
      <SafeAreaView style={styles.container}>
        <BottomTabNavigator />
      </SafeAreaView>
    </ReduxProvider>
  </NavigationContainer>
);






const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
