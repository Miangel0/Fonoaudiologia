import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'

const Fono = () => {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.center}>
            <Text style={styles.title}>
            FONOAUDIOLOGÍA Y LACTANCIA MATERNA
            </Text>
            <TouchableOpacity style={styles.step}>
                <Text style={styles.stepText}>
                Patrón Oromotor en el Desarrollo del Bebé Lactante
                </Text>
                <Image
                 style={styles.image} 
                 source={require('../img/fono1.png')}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.step}>
                <Text style={styles.stepText}>
                Proceso de la Succión en el Lactante
                </Text>
                <Image
                 style={styles.image} 
                 source={require('../img/fono2.png')}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.step}>
                <Text style={styles.stepText}>
                Procesos de la Respiración y su Importancia en el Habla.
                </Text>
                <Image
                 style={styles.image} 
                 source={require('../img/fono3.png')}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.step}>
                <Text style={styles.stepText}>
                El Habla
                </Text>
                <Image
                 style={styles.image} 
                 source={require('../img/fono4.png')}/>
            </TouchableOpacity>
        </View>
    </ScrollView>
  )
}

export default Fono

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  center: {
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#602B67',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  step: {
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 50,
    backgroundColor: '#E7D6ED',
    padding: 10,
    borderRadius: 5,
    width: '90%',
  },
  stepText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#602B67',
    textAlign: 'center',
  },
})