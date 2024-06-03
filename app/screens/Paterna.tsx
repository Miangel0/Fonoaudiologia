import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';

const Paterna = () => {
  const handleLinkPress = (url:string) => {
    Linking.openURL(url);
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.subheader}>
            <Text style={styles.subheaderText}>Padre Lactante</Text>
          </View>
          <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
            style={{width: 100, height: 100, borderRadius: 50, marginBottom: 40}} />
          <TouchableOpacity onPress={() => handleLinkPress('https://youtu.be/Gx-ORcHwkTE?si=e-KL6oZEGwC2NXjR')}>
            <Text style={styles.linkText}>Ver video</Text>
          </TouchableOpacity>
          <View style={styles.descriptionContainerLeft}>
            <Text style={[styles.descriptionText, styles.largeText]}>
              La llegada de un nuevo integrante a la familia genera cambios en la vida de los padres y familiares, por lo tanto, deben tener en cuenta las recomendaciones del video.
            </Text>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  )
}

export default Paterna

const styles = StyleSheet.create({
  container: {
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
    textAlign: 'center', 
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
    marginTop: 80,
  },
  largeText: {
    fontSize: 20, // Tamaño de texto más grande
  },
})