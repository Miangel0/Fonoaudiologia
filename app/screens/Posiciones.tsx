import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import React from 'react'
import { StatusBar } from 'expo-status-bar';

const Posiciones = () => {
  const handleLinkPress = (url:string) => {
  Linking.openURL(url)
};

return (
  <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.contentContainer}>
        <View style={styles.subheader}>
          <Text style={styles.subheaderText}>Posiciones y Agarre</Text>
        </View>
        <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
                  style={{width: 100, height: 100, borderRadius: 50, marginBottom: 70}} />
        <TouchableOpacity onPress={() => handleLinkPress('https://youtu.be/4Sh8vPmYHIs?si=RdbFBQLYHKlurspc')}>
          <Text style={styles.linkText}>Ver video</Text>
        </TouchableOpacity>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            El video narrará el paso a paso de cómo debe ser la succión del lactante durante la alimentación, teniendo presente las características de la misma.
          </Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.subheader}>
          <Text style={styles.subheaderText}>Posturas para la lactancia materna</Text>
        </View>
        <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
                  style={{width: 100, height: 100, borderRadius: 50, marginBottom: 70}} />
        <TouchableOpacity onPress={() => handleLinkPress('https://youtu.be/BEnWo5-u_DA?si=PNTN_JqK_lYfu3cD')}>
          <Text style={styles.linkText}>Ver video</Text>
        </TouchableOpacity>
        <View style={styles.descriptionContainerLeft}>
          <Text style={styles.descriptionText}>
            El video narrará el paso a paso de cómo se debe realizar la posición que se puede adoptar durante el proceso de lactancia, así mismo, se dirá cuál es el beneficio y cuándo es recomendable realizarla.
          </Text>
        </View>
      </View>
    </ScrollView>
    <StatusBar style="auto" />
  </View>
)
}

export default Posiciones

const styles = StyleSheet.create({container: {
  flex: 1,
  backgroundColor: '#fff',
},
header: {
  backgroundColor: '#A15FB842',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  height: 120,
  paddingTop: 20,
},
title: {
  color: '#CB6BD8',
  fontSize: 20,
  fontWeight: 'bold',
},
addButton: {
  position: 'absolute',
  left: 10,
},
circle: {
  width: 40,
  height: 40,
  borderRadius: 30,
  backgroundColor: '#CB6BD8CF',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center', // Añadido para centrar horizontalmente en el círculo
},
addButtonIcon: {
  color: 'white',
  justifyContent: 'center',
  fontSize: 24,
},
scrollContainer: {
  flexGrow: 1,
},
contentContainer: {
  paddingHorizontal: 20,
  marginBottom: 40,
},
subheader: {
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 20,
},
subheaderText: {
  color: '#602B67',

  fontSize: 18,
  fontWeight: 'bold',
  
},
image: {
  width: '100%',
  height: 200,
  marginBottom: 20,
},
linkText: {
  color: '#007BFF', // Cambio a color azul
  fontSize: 16,
  textAlign: 'left',
  marginTop: -20, // Espacio agregado entre el enlace y la descripción
  textDecorationLine: 'underline',
},
descriptionContainer: {
  marginBottom: 50,
},
descriptionContainerLeft: {
  marginBottom: 30,
  alignItems: 'flex-start', // Alinea el texto a la izquierda
},
descriptionText: {

  textAlign: 'left', // Ajusta el texto a la izquierda
  marginTop: 30
},
})