import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { color } from 'react-native-reanimated';
import { colores } from '../theme/appTheme';

const Tab = createMaterialTopTabNavigator();

export const TopTab = () => {

const { top } = useSafeAreaInsets()

  return (
    <Tab.Navigator 
        style = {{ 
            paddingTop: top
        }}
        sceneContainerStyle = {{ 
            backgroundColor: 'white'
        }}
        tabBarOptions = {{ 
            pressColor: colores.primary,
            showIcon: true,
            indicatorStyle: {
                backgroundColor: colores.primary 
            },
            style: {
            shadowColor: 'transparent',
            elevation: 0
            }
        }}

        screenOptions = { 
            ({ route }) => ({
               tabBarIcon: ({ color, focused}) => {
                 let IconName: string = '' ;
           
                 switch ( route.name ) {
                   case 'Chats':
                     IconName = 'chatbox-ellipses-outline'
                   break
                   case 'Contacts':
                     IconName = 'people-outline'
                   break
                   case 'Albums':
                     IconName = 'albums-outline'
                   break
                 }
                
                 return <Icon name= {IconName} size={ 23 } color= { color } />;
               }
            }) 
         }
    >
      <Tab.Screen name="Chats" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
}