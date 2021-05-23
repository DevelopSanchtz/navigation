import { DrawerScreenProps } from '@react-navigation/drawer';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, useWindowDimensions } from 'react-native';
import { styles, colores } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';


//interface Props extends StackScreenProps<any, any>{} 
interface Props extends DrawerScreenProps<any, any>{} 


export const uno = ( { navigation }: Props ) => {

    const { width } = useWindowDimensions();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity
                style={{
                    marginLeft: 5
                }}
                onPress = {() => navigation.toggleDrawer()}
                >
                    <Icon name= "menu-outline" size={ 25 } color= { colores.primary } />
                </TouchableOpacity>
            )
        })
    },[])

     return (
        <View style={styles.globalMargin}>
            <Text style = {styles.title}>Página Uno Screen</Text>
            <Button title="ir a dos" onPress= { () => navigation.navigate('dos')}/> 

            <Text style = {{marginVertical: 20, fontSize: 18, marginLeft: 5}}>Navegar con Argumentos</Text>

            <View style = {{flexDirection: 'row'}}>

                <TouchableOpacity style={{...styles.botonGrande, backgroundColor: '#5856D6'}} onPress = {() => navigation.navigate('PersonasScreen', {
                    id: 1,
                    nombre: 'Jose'
                })}>
                    <Icon name= "man-outline" size={ 25 } color= "white" />
                    <Text style = { styles.botonGrandeTexto }>José</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{...styles.botonGrande, backgroundColor: '#FF9427'}} onPress = {() => navigation.navigate('PersonasScreen', {
                    id: 2,
                    nombre: 'Armando'
                })}>
                    <Icon name= "woman-outline" size={ 25 } color= "white" />
                    <Text style = { styles.botonGrandeTexto }>Armando</Text>
                </TouchableOpacity>

            </View>

            

        </View>
    )
}