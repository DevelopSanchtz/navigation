import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingScreen } from '../screens/SettingsScreen';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
    drawerPosition = 'right'
    drawerType = {width >= 600 ? 'permanent' : 'front'}
    >
      <Drawer.Screen name="StackNavigator" options= {{title: 'Home'}} component={StackNavigator} />
      <Drawer.Screen name="SettingScreen" options= {{title: 'Settings'}} component={SettingScreen} />
    </Drawer.Navigator>
  );
}