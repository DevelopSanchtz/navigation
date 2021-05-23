import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { Tab3Screen } from '../screens/Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { colores, styles } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { TopTab } from './TopTab';

import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Reanimated 2'])

export const Tabs = () => {
  return Platform.OS === 'ios' 
          ? <TabsIOS /> 
          : <TabsAndroid />
}

const BottomTabAndroid = createMaterialBottomTabNavigator();

function TabsAndroid () {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled = { true }
      barStyle = {{ 
        backgroundColor: colores.primary,
      }}

      screenOptions = { 
        ({ route }) => ({
           tabBarIcon: ({ color, focused }) => {
             let IconName: string = '' ;
       
             switch ( route.name ) {
               case 'Tab1Screen':
                 IconName = 'search-outline'
               break
               case 'Tab2Screen':
                 IconName = 'home-outline'
               break
               case 'StackNavigator':
                 IconName = 'heart-outline'
               break
             }
            
             return <Icon name= {IconName} size={ 23 } color= { color } />;
           }
        }) 
     }
    >
        <BottomTabAndroid.Screen name="Tab1Screen" options ={{ title: 'Tab Uno' }} component={Tab1Screen} />
        <BottomTabAndroid.Screen name="Tab2Screen" options ={{ title: 'Tab Dos' }} component={TopTab} />
        <BottomTabAndroid.Screen name="StackNavigator" options ={{ title: 'Stack' }} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}

const BottomTabIOS = createBottomTabNavigator();
const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle = {{
        backgroundColor: 'white'
      }}
      tabBarOptions = {{
        activeTintColor: colores.primary,
        style: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0
        },
        labelStyle: {
          fontSize: 15
        }
      }}
      screenOptions = { 
         ({ route }) => ({
            tabBarIcon: ({ color, focused, size }) => {
              let IconName: string = '' ;
        
              switch ( route.name ) {
                case 'Tab1Screen':
                  IconName = 'T1'
                break
                case 'Tab2Screen':
                  IconName = 'T2'
                break
                case 'StackNavigator':
                  IconName = 'ST'
                break
              }
             
              return <Icon name="airplane-outline" size={ size } color= { color } />;

            }
         }) 
      }
      
    >

    { /*tabBarIcon: (props) => <Text style={{color: props.color}}>Hola</Text> */ }
      <BottomTabIOS.Screen name="Tab1Screen" options ={{ title: 'Tab Uno' }} component={Tab1Screen} />
      <BottomTabIOS.Screen name="Tab2Screen" options ={{ title: 'Tab Dos' }} component={TopTab} />
      <BottomTabIOS.Screen name="StackNavigator" options ={{ title: 'Stack' }} component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
}