import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { DrawerNavigator } from './src/navigator/DrawerNavigator';
import { MenuLateral } from './src/navigator/MenuLateral';
import { Tabs } from './src/navigator/Tabs';

const App = () => {
     return (
      <NavigationContainer>
      {/*<StackNavigator/>*/}
      {/*<DrawerNavigator/> */} 
      <MenuLateral /> 
      {/* <Tabs /> */}
      </NavigationContainer>
    )
}

export default App;