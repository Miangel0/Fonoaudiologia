import React from 'react'
import Constants from 'expo-constants'
import { StyleSheet, Text, View, Route } from 'react-native'
import Menu from './Menu'
import Extraccion from '../pages/Extraccion'

const Main = () => {
  return (
    <View>
        <View style={styles.container}>
            <Text style={styles.title}>EMBARAZADAS</Text>
        </View>
        <Menu/>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E7D6ED',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
  },
  title: {
    marginTop: 30,
    color: '#CB6BD8',
    fontSize: 24,
    fontWeight: 'bold',
  },
})