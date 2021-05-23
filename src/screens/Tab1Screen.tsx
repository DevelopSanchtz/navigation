import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { Text, View, StyleSheet } from 'react-native';
import { styles } from '../theme/appTheme';

export const Tab1Screen = () => {
     return (
        <View style = {styles.globalMargin}>
            <Text style = {styles.title}>Iconos</Text>

            <Text>
            <Icon name="airplane-outline" size={30} color="#900" />;
            </Text>

        </View>
    )
}