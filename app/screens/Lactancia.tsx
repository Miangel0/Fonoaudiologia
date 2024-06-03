import { StyleSheet, ScrollView, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Lactancia = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.center}>
        <Text style={styles.title}>Lactancia Materna</Text>
        <TouchableOpacity style={styles.step}>
          <Text style={styles.stepText}>
          La lactancia materna es conocida de forma mundial como el mejor alimento para los recién nacidos, el cual brinda nutrientes óptimos para un apropiado proceso de crecimiento y desarrollo. La Organización Mundial de la Salud (OMS), recomienda la lactancia exclusiva hasta los seis meses, donde, el único alimento es ofrecido por la madre por medio del seno y no se suministra algo diferente a leche materna y la lactancia materna de forma complementaria por lo menos hasta los 2 años de edad, donde, se inicia con la ingesta de diversos alimentos que entran a complementar los nutrientes que la leche materna ya no aporta al bebé. Por otro lado, se encuentran los links de ingreso a los blogs que se encuentran vinculados a la aplicación. tales como:
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.step}>
          <Text style={styles.stepText}>
            "Blog de SINA": es un blog de apoyo a la lactancia materna y de crianza consciente: https://elblogdesina.wordpress.com/
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.step}>
          <Text style={styles.stepText}>
          "Blog de lactando": es un blog con un grupo de apoyo a la lactancia materna, donde varias madres comparten sus experiencias en relación al proceso de lactancia materna http://www.lactando.org/about/
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.step}>
          <Text style={styles.stepText}>
          "Blog piel a piel": en este blog podrás encontrar consejos sobre la alimentación durante la lactancia, manuales, videos ilustrativos, entró otra variedad de contenido http://pielapiel.blogspot.com/
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.step}>
          <Text style={styles.stepText}>
          -"Blog ser padres": este blog abarca temáticas antes, durante y después del embarazo, presentando diversos temas de interés en cuanto a la lactancia materna y el desarrollo del bebé https://www.serpadres.es/antes-del-embarazo 
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.step}>
          <Text style={styles.stepText}>
          "Blog lactapp": es un blog dirigido a madres lactantes, en el cual se encuentra diferente información acerca de la lactancia materna, como solucionar y superar barreras en la lactancia, grupos de apoyo, entre otras cosas que apoyaran el proceso tanto de lactancia como de alimentación complementaria. https://blog.lactapp.es/


          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Lactancia

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
    marginBottom: 50,
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  step: {
    backgroundColor: '#E7D6ED',
    padding: 20,
    borderRadius: 5,
    width: '80%',
  },
  stepText: {
    fontSize: 16,
  },
})