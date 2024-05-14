import React from 'react';
import { View, Text, Image } from 'react-native'

const Menu = () => {
  return (
    
    <View>
      <Text style={{ fontSize: 30, fontWeight: 'bold', marginVertical: 20, alignSelf: 'center', marginBottom: 20, marginTop:20}}>MENU</Text>

      <View style={{ paddingHorizontal: 20 }}>
        <View style={{ borderRadius: 10, marginBottom: 15, padding: 20, borderColor: "#053D8D", borderWidth: 1 }}>
          <Text style={{ fontSize: 18 }}>Lactancia Materna</Text>
        </View>
        <View style={{ borderRadius: 10, marginBottom: 15, padding: 20, borderColor: "#053D8D", borderWidth: 1 }}>
          <Text style={{ fontSize: 18 }}>Posiciones y agarre</Text>
        </View>
        <View style={{ borderRadius: 10, marginBottom: 15, padding: 20, borderColor: "#053D8D", borderWidth: 1 }}>
          <Text style={{ fontSize: 18 }}>Padre Lactante</Text>
        </View>
        <View style={{ borderRadius: 10, marginBottom: 15, padding: 20, borderColor: "#053D8D", borderWidth: 1 }}>
          <Text style={{ fontSize: 18 }}>Lactancia materna en madres universitarias</Text>
        </View>
        <View style={{ borderRadius: 10, marginBottom: 15, padding: 20, borderColor: "#053D8D", borderWidth: 1 }}>
          <Text style={{ fontSize: 18 }}>Podcast experiencias en madres universitarias</Text>
        </View>
        <View style={{ borderRadius: 10, marginBottom: 10, padding: 20, borderColor: "#053D8D", borderWidth: 1 }}>
          <Text style={{ fontSize: 18 }}>Fonoaudiología y lactancia materna</Text>
        </View>
      </View>
    </View>
  )
}

export default Menu
