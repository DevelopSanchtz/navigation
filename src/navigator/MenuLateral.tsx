import * as React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingScreen } from '../screens/SettingsScreen';
import { Image, Text, useWindowDimensions, View, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { createStackNavigator } from '@react-navigation/stack';
import { create } from 'react-test-renderer';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';


const Drawer = createDrawerNavigator();

const Stack = createStackNavigator()

/*const SettingsStackScreen = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="SettingsScreen" component={SettingScreen}/>
      </Stack.Navigator>
    )
} Y si lo queremos usar solo ponemos <Drawer.Screen name="SettingScreen"  component={SettingsStackScreen} /> */

export const MenuLateral = () => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
    //drawerPosition = 'right'
    drawerType = {width >= 600 ? 'permanent' : 'front'}
    drawerContent = { (props) => <MenuInterno { ...props }/>}
    >
      <Drawer.Screen name="Tabs"  component={Tabs} />
      <Drawer.Screen name="SettingScreen"  component={SettingScreen} />
    </Drawer.Navigator>
  );
}


const MenuInterno = ({ navigation }: DrawerContentComponentProps<DrawerContentOptions>) => {
  return(
    <DrawerContentScrollView>
        <View style={styles.avatarContainer}> 
          <Image 
            source = {{
              uri: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png'
              
            }}
            style = { styles.avatar }
          />
        </View>

        <View style={styles.menuContainer}>

          <TouchableOpacity 
          style={{
            ...styles.menuBoton,
            flexDirection: 'row'
          }}
          onPress={ () => navigation.navigate('Tabs')}
          >
            <Icon name="compass-outline" size={ 25 } color= "black" />
            <Text style={styles.menuTexto}> Navegacion Stack</Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={{
            ...styles.menuBoton,
            flexDirection: 'row'
          }}
          onPress={ () => navigation.navigate('SettingScreen')}
          >
            <Icon name="cog-outline" size={ 25 } color= "black" />
            <Text style={styles.menuTexto}> Ajustes</Text>
          </TouchableOpacity>

        </View>
    </DrawerContentScrollView>

  )}