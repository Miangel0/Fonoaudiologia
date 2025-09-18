import { ScrollView, Text, StyleSheet, View } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { useRef } from "react";
import CustomHeader from "@/components/CustomHeader";

export default function Posiciones() {
  const videoRef1 = useRef<Video>(null);
  const videoRef2 = useRef<Video>(null);

  return (
    <ScrollView style={styles.container}>
      <CustomHeader />

      {/* Título principal */}
      <Text style={styles.title}>
        <Text style={styles.highlight}>Posición y agarre</Text>
      </Text>

      {/* Subtítulo */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Agarre</Text>
        <Text style={styles.paragraph}>
          La succión materna es el mecanismo por el cual el bebé extrae la leche
          humana permitiendo el adecuado proceso nutricional. Para una adecuada
          succión, es importante tener en cuenta:
        </Text>
      </View>

      {/* Video 1 - Agarre */}
      <Text style={styles.videoTitle}>Video 1</Text>
      <View style={styles.videoContainer}>
        <Video
          ref={videoRef1}
          source={require("@/assets/videos/Lactancia1.mp4")}
          style={styles.video}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
        />
      </View>

      {/* Texto durante la succión */}
      <Text style={styles.sectionTitle}>Durante la succión</Text>
      <Text style={styles.bullet}>
        ● No se escucha ruido (chasquidos) al succionar y tampoco se hunden las
        mejillas.
      </Text>
      <Text style={styles.bullet}>
        ● El vacío que genera el niño cuando hace un buen acople hacia el seno
        materno no debe generar ningún tipo de sonido, en ocasiones se puede
        escuchar la deglución (sonido al tragar).
      </Text>

      {/* Señales de alerta */}
      <Text style={styles.sectionTitle}>Señales de alerta para la succión</Text>
      <Text style={styles.bullet}>
        ● Es una señal de alerta cuando el bebé no está agarrando el pezón bien
        (el proceso de succión no está siendo efectivo, el agarre no es
        adecuado y la transferencia de leche tampoco lo es).
      </Text>
      <Text style={styles.bullet}>
        ● El bebé debe abarcar mayor parte del seno (haciendo movimientos hacia
        adelante) para una mejor extracción de leche.
      </Text>

      {/* Subtítulo posturas */}
      <Text style={styles.subtitle}>Posturas para la lactancia materna</Text>

      {/* Texto previo al video */}
      <Text style={styles.paragraph}>
        El video narrará el paso a paso de cómo se debe realizar la posición que
        se puede adoptar durante el proceso de lactancia, así mismo, se dirá
        cuál es el adecuado y cuándo es recomendable realizarlo.
      </Text>

      {/* Texto posición recostada */}
      <Text style={styles.sectionTitle}>Posición recostada de lado</Text>
      <Text style={styles.bullet}>
        ● La mamá debe estar acostada de lado en un lugar cómodo; el bebé debe
        estar de frente al pecho de la madre.
      </Text>
      <Text style={styles.bullet}>
        ● Desplazar al bebé hasta que su nariz y labio superior queden a la
        altura del pezón y que su boca se abra lo suficiente para abarcar gran
        parte de la areola logrando un agarre apropiado.
      </Text>
      <Text style={styles.bullet}>
        ● La mamá mantiene la posición con una almohada, no se recomienda apoyar
        con el brazo para evitar riesgo de caída del bebé.
      </Text>

      {/* Nota final */}
      <Text style={styles.paragraph}>
        Esta posición es provechosa para aquellas madres que por motivos externos
        no se pueden incorporar o desean momentos de descanso y también previene
        dolor en la zona del periné.
      </Text>

      {/* Video 2 - Posturas */}
      <Text style={styles.videoTitle}>Video 2</Text>
      <View style={styles.videoContainer}>
        <Video
          ref={videoRef2}
          source={require("@/assets/videos/Lactancia1.mp4")}
          style={styles.video}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 15,
    color: "#333",
  },
  highlight: {
    color: "#5B0A59",
    textDecorationLine: "underline",
  },
  section: { marginHorizontal: 15, marginBottom: 15 },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#E5C4E5",
    color: "#5B0A59",
    padding: 8,
    borderRadius: 6,
    marginVertical: 10,
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 22,
    color: "#333",
    textAlign: "justify",
    marginHorizontal: 15,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 15,
    marginHorizontal: 15,
    marginBottom: 8,
    color: "#333",
  },
  videoContainer: {
    width: "100%",
    height: 220,
    backgroundColor: "#000",
    marginBottom: 15,
  },
  video: { width: "100%", height: "100%" },
  videoTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#5B0A59",
    marginHorizontal: 15,
    marginBottom: 6,
  },
  bullet: {
    fontSize: 15,
    lineHeight: 22,
    color: "#333",
    marginHorizontal: 20,
    marginBottom: 8,
    textAlign: "justify",
  },
});
