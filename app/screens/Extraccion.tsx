import { StyleSheet, ScrollView, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Extraccion = () => {
  return (
    <ScrollView style={styles.container}>
    <View style={styles.center}>
      <Text style={styles.title}>Extracción de Leche Materna</Text>
      <TouchableOpacity style={styles.step}>
        <Text style={styles.stepText}>
        La extracción de la leche materna se puede realizar en cualquier contexto (familiar, laboral, educativo, grupos de apoyo), lo principal es la correcta higiene, un lugar tranquilo y cómodo para la madre. Se puede realizar de dos formas: manual y mediante extractor. La extracción manual es una de los métodos tradicionales y económicos, y le permite a la madre realizarla en todos los casos ya que no es necesario el uso de dispositivos electrónicos. Para el proceso se debe tener en cuenta:  -Inicialmente, la pareja o un familiar puede realizar un masaje en la espalda de la madre para relajarla y facilitar la producción de leche. - Posteriormente, se traza una línea imaginaria que divida al seno en cuatro cuadrantes, y se inicia con un masaje alrededor de los pechos de forma circular, en sentido de las manecillas de reloj y generando una ligera presión y seguido a esto, se deben deslizar los dedos desde los extremos del seno hasta la areola. (47)
        - Frota los senos realizando una presión suave de adelante hacia atrás, la mano debe formar una C -Inclínate hacia adelante sacudiendo el pecho suavemente para que la leche baje. -Hacer una suave presión sobre la areola haciendo movimientos de atrás hacia adelante (nunca del pezón) y finalmente disponer de un frasco preferiblemente de vidrio (específicamente para esta función) para depositar el líquido. En el caso de la extracción con uso de dispositivo (eléctrico o manual), se debe tener en cuenta la higiene del instrumento para disminuir el riesgo de infecciones digestivas. (4$@$v=v1.16$@$7) Se debe tener en cuenta realizar el masaje de preparación, como en el caso de la extracción manual. Es muy importante seleccionar de forma adecuada la copa en concordancia con la anatomía del seno para un proceso exitoso. Es recomendable hacer uso de los manuales y las recomendaciones incluidas en los instructivos. (47)Tips a tener en cuenta:  -Las extracciones son más efectivas en la madrugada por el aumento de la hormona prolactina. -Cuando esté alimentando a su bebé, puede conectar el extractor del otro seno para facilitar la eyección de leche y mejorar la cantidad almacenada. (47)

        LINK: VIDEO 4
        </Text>
        
        <Image
        style={styles.image}
        source={require('../img/madres1.png')}
      />
      </TouchableOpacity>
      <Text style={styles.title}>HIGIENE</Text>
      <TouchableOpacity style={styles.step}>
        <Text style={styles.stepText}>
        Lo principal para la extracción de la leche materna es la correcta asepsia de la madre en relación al seno y las manos, o en los casos que se requiera, los instrumentos de extractor mecánico. Tenga en cuenta las siguientes recomendaciones:  1. Realiza un lavado de manos completo, llevando a cabo cada paso de forma óptima por un tiempo de 40 segundos con jabón. 2. Hacer limpieza del seno, especialmente si hace uso de copas recolectoras de leche.  3. El frasco que requiera para depositar la leche materna debe ser colocado sobre una toalla de papel con la tapa boca arriba. 4. Para evitar la contaminación de la leche materna durante la extracción, es recomendable recogerse el cabello, uñas sin esmalte y no usar joyería (anillos, manillas, etc). (47)

        Posterior a la extracción de la leche materna, es recomendable depositarla en frascos de vidrio o el uso de las bolsas selladas especializadas para la leche materna, es importante diligenciar estas con la hora y la fecha exacta del momento de la extracción. En caso de que este proceso se realice por fuera de casa, se debe transportar en un bolso o lonchera con paquetes de refrigeración, esto ayudará a la conservación del líquido para posteriormente ingresarlo al congelador.  Recomendaciones La leche materna se puede conservar de 3 horas en temperatura ambiente (entre los 16ºC y 26ºC)

        Proceso:
        En baño maría se debe calentar el frasco o la bolsa sellada, tener cuidado en este caso, ya que, una temperatura extrema puede generar riesgo para la persona que realiza este proceso.  Posterior al primer paso, deposite la leche en el instrumento de preferencia, se recomienda hacer uso de vaso o cuchara para evitar confusión de tetina pezón que limite continuar con la succión materna. Se recomienda verificar la temperatura de la leche a ofrecer (32°C). ¿CÓMO USAR LA COPA O LA CUCHARA? Para hacer uso de la copa o cuchara, se deben seguir las siguientes
        </Text>
        <Text style={styles.stepText}>
        LINK: VIDEO 5
        </Text >
        
        <Image
        style={styles.image}
        source={require('../img/madres1.png')}
      />
      </TouchableOpacity>
    </View>
  </ScrollView>
  )
}

export default Extraccion

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
    width: 300,
    height: 300,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  step: {
    marginTop: 50,
    marginBottom: 50,
    backgroundColor: '#E7D6ED',
    padding: 10,
    borderRadius: 5,
    width: '80%',
  },
  stepText: {
    fontSize: 16,
  },
})