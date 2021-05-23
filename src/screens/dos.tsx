import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { styles } from '../theme/appTheme';

export const dos = () => {

        const navigator = useNavigation()

        useEffect(() => {
            navigator.setOptions ({
                title: 'Hola Mundo',
                headerBackTitle: '' //para ios

            })
        }, [])

     return (
        <View style={styles.globalMargin}>
            <Text style = {styles.title}>Página Dos Screen</Text>
            <Button title="ir a tres" onPress= { () => navigator.navigate('tres') }/>
        </View>
    )
}