import { StyleSheet } from 'react-native'
import React from 'react'
import { DrawerContent, createDrawerNavigator } from '@react-navigation/drawer'
//screens
import Extraccion from './screens/Extraccion'
import Fono from './screens/Fono'
import Paterna from './screens/Paterna'
import Lactancia from './screens/Lactancia'
import Posiciones from './screens/Posiciones'
import Podscast from './screens/Podscast'
import { NavigationContainer } from '@react-navigation/native'


const Drawer = createDrawerNavigator();

export default function App() {
  return(
    <NavigationContainer independent={true}>
      <Drawer.Navigator
       screenOptions={{
        drawerStyle:{
          backgroundColor: '#E7D6ED',
          width: 250
        },
        headerStyle:{
          backgroundColor: '#E7D6ED',
          height: 95,
        },
        headerTintColor: '#000',
        headerTitleStyle:{
          fontSize: 25,
          fontWeight: 'bold',
          color: '#CB6BD8',
        },
        headerTitleAlign: 'center',
        drawerActiveTintColor: "#CB6BD8",
        drawerLabelStyle:{
          color: '#111'
        }
       }}
      >
        <Drawer.Screen name="Lactancia" component={Lactancia}/>
        <Drawer.Screen name="Posiciones" component={Posiciones}/>
        <Drawer.Screen name="Paterna" component={Paterna}/>
        <Drawer.Screen name="Extraccion" component={Extraccion} />      
        <Drawer.Screen name="Podscast" component={Podscast}/>
        <Drawer.Screen name="Fono" component={Fono}/>
      </Drawer.Navigator>
    </NavigationContainer>
    );
}


const styles = StyleSheet.create({})