import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BookTransactionScreen from './screens/BookTransactionScreen'
import SearchScreen from './screens/SearchScreen'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
export default function App() {
  return (
    <AppContainer/>
  );
}
 const TabNavigator = createBottomTabNavigator({
   Transaction:{screen:BookTransactionScreen}, 
   Search:{screen:SearchScreen}
 })
 const AppContainer=createAppContainer(TabNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
