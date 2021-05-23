import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { uno } from '../screens/uno';
import { dos } from '../screens/dos';
import { tres } from '../screens/tres';
import { PersonaScreen } from '../screens/PersonasScreen';

export type RootStackParams = {
    uno : undefined,
    dos: undefined
    tres: undefined
    PersonaScreen: { id: number, nombre: string }
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
     return (
         <Stack.Navigator 
            //initialRouteName = "dos"
            screenOptions = {{
                //headerShown: false, muestra el header de arriba del screen
                headerStyle: {
                    elevation: 0 ,//para android para que no se vea la linea 
                    shadowColor: 'transparent', //para ios
                    
                },
                cardStyle: {
                    backgroundColor: 'white'
                }
            
            }}
         >
             <Stack.Screen name = "uno" options = {{title: 'Página Uno'}} component = {uno} />
             <Stack.Screen name = "dos" options = {{title: 'Página Dos'}} component = {dos} />
             <Stack.Screen name = "tres" options = {{title: 'Página Tres'}} component = {tres} />
             <Stack.Screen name = "PersonasScreen" options = {{title: 'Personas'}} component = {PersonaScreen} />

         </Stack.Navigator>
    )
}