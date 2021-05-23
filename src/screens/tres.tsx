import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any,any> {};

export const tres = ({navigation}: Props) => {
     return (
        <View style = {styles.globalMargin}>
            <Text style = {styles.title}>Pagina Tres Screen</Text>
            <Button title="Regresar" onPress= { () => navigation.pop()}/>
            <Button title="ir a home" onPress= { () => navigation.popToTop()}/>
        </View>
    )
}