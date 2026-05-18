import { ScrollView, Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Video, ResizeMode, AVPlaybackStatus } from "expo-av";
import { useRef, useState } from "react";
import CustomHeader from "@/components/CustomHeader";
import ContentWidth from "@/components/ContentWidth";
import { Ionicons } from "@expo/vector-icons";

export default function Posiciones() {
  const videoRef2 = useRef<Video>(null);
  const [isPlaying2, setIsPlaying2] = useState(false);

  const togglePlayPause = async () => {
    if (videoRef2.current) {
      if (isPlaying2) {
        await videoRef2.current.pauseAsync();
      } else {
        await videoRef2.current.playAsync();
      }
      setIsPlaying2(!isPlaying2);
    }
  };

  const toggleFullscreen = async () => {
    if (videoRef2.current) {
      await videoRef2.current.presentFullscreenPlayer();
    }
  };

  const handlePlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (status && "isPlaying" in status) {
      setIsPlaying2(status.isPlaying);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <CustomHeader />

      <ContentWidth>
        <Text style={styles.title}>
          <Text style={styles.highlight}>Posición y agarre</Text>
        </Text>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Agarre</Text>
        </View>

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

        <Text style={styles.sectionTitle}>
          Señales de alerta para identificar dificultades en la succión
        </Text>
        <Text style={styles.bullet}>
          ● Es una señal de alerta para darnos cuenta que el bebé no está agarrando el pezón bien (el proceso de succión no está siendo efectivo, que el agarre no está siendo eficiente y la transferencia de leche tampoco lo es).
        </Text>
        <Text style={styles.bullet}>
          ● En conjunto vemos que el bebé quiere abarcar mayor parte del seno (haciendo movimientos hacia delante) para poder hacer mayor extracción de leche.
        </Text>

        <View style={styles.divider} />

        <View style={styles.section}>
          <Text style={styles.subtitle}>Posturas para la lactancia materna</Text>
          <Text style={styles.paragraph}>
            {"\n"}
            El video narrará el paso a paso de cómo se debe realizar la posición que se puede adoptar durante el proceso de lactancia, así mismo, se dirá cuál es el beneficio y cuándo es recomendable realizarla.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Posición recostada de lado</Text>
        <Text style={styles.bullet}>
          ● La mamá debe estar acostada de lado en un lugar cómodo; el bebé también lo estará de frente al pecho de la madre.
        </Text>
        <Text style={styles.bullet}>
          ● Desplaza al bebé hasta que su nariz y labio superior quede a la altura del pezón y espera a que se agarre espontáneamente. Se recomienda ofrecer un estímulo olfativo para lograr un agarre espontáneo.
        </Text>
        <Text style={styles.bullet}>
          ● Para mantener la posición sujeta al bebé con la mano, no se recomienda apoyar con colines para disminuir el riesgo de asfixia del lactante.
        </Text>

        <View style={styles.section}>
          <Text style={styles.paragraph}>
            Esta posición es beneficiosa para aquellas madres que por motivos externos no se pueden incorporar o desean momentos de descanso y previene dolor en la zona del petrio.
          </Text>
        </View>

        <View style={styles.videoContainer}>
          <Video
            ref={videoRef2}
            source={{
              uri: "https://res.cloudinary.com/dnecewfrp/video/upload/v1762931813/Lactancia2_lyu7mo.mp4",
            }}
            style={styles.video}
            useNativeControls={false}
            resizeMode={ResizeMode.CONTAIN}
            isLooping={false}
            shouldPlay={false}
            onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
          />

          <View style={styles.controlsOverlay}>
            <TouchableOpacity style={styles.controlButton} onPress={togglePlayPause}>
              <Ionicons name={isPlaying2 ? "pause" : "play"} size={28} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.controlButton} onPress={toggleFullscreen}>
              <Ionicons name="expand" size={28} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </ContentWidth>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scrollContent: {
    alignItems: "center",
    paddingBottom: 24,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "left",
    marginVertical: 15,
    color: "#333",
    width: "100%",
  },
  highlight: {
    color: "#5B0A59",
    textDecorationLine: "underline",
  },
  section: {
    marginBottom: 15,
    width: "100%",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#E5C4E5",
    color: "#5B0A59",
    padding: 8,
    borderRadius: 6,
    marginVertical: 10,
    textAlign: "center",
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 22,
    color: "#333",
    textAlign: "justify",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 8,
    color: "#333",
    width: "100%",
  },
  videoContainer: {
    position: "relative",
    width: "100%",
    aspectRatio: 16 / 9,
    backgroundColor: "#000",
    marginBottom: 15,
    borderRadius: 8,
    overflow: "hidden",
  },
  video: {
    width: "100%",
    height: "100%",
  },
  bullet: {
    fontSize: 15,
    lineHeight: 22,
    color: "#333",
    marginBottom: 8,
    textAlign: "justify",
    width: "100%",
  },
  controlsOverlay: {
    position: "absolute",
    bottom: 10,
    right: 10,
    flexDirection: "row",
    gap: 15,
    backgroundColor: "rgba(0,0,0,0.4)",
    borderRadius: 25,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  controlButton: {
    padding: 5,
  },
  divider: {
    height: 1,
    backgroundColor: "#E5C4E5",
    marginVertical: 20,
    width: "100%",
  },
});
