import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';

export const SettingScreen = () => {
    const insets = useSafeAreaInsets();
     return (
         <View style={{...styles.globalMargin, marginTop: insets.top + 10}}>
             <Text style={styles.title}>SettingScreen</Text>
         </View>
    )
}