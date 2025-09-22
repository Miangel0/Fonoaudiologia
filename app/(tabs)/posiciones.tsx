import { ScrollView, Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Video, ResizeMode, AVPlaybackStatus } from "expo-av";
import { useRef, useState } from "react";
import CustomHeader from "@/components/CustomHeader";
import { Ionicons } from "@expo/vector-icons";

export default function Posiciones() {
  const videoRef1 = useRef<Video>(null);
  const videoRef2 = useRef<Video>(null);
  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);

  const togglePlayPause = async (videoNumber: number) => {
    const videoRef = videoNumber === 1 ? videoRef1 : videoRef2;
    const setIsPlaying = videoNumber === 1 ? setIsPlaying1 : setIsPlaying2;
    const isPlaying = videoNumber === 1 ? isPlaying1 : isPlaying2;
    
    if (videoRef.current) {
      if (isPlaying) {
        await videoRef.current.pauseAsync();
      } else {
        await videoRef.current.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleFullscreen = async (videoNumber: number) => {
    const videoRef = videoNumber === 1 ? videoRef1 : videoRef2;
    if (videoRef.current) {
      await videoRef.current.presentFullscreenPlayer();
    }
  };

  const handlePlaybackStatusUpdate = (status: AVPlaybackStatus, videoNumber: number) => {
    const setIsPlaying = videoNumber === 1 ? setIsPlaying1 : setIsPlaying2;
    
    if (status && "isPlaying" in status) {
      setIsPlaying(status.isPlaying);
    }
  };

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
          <Text style={styles.videoTitle}>Video 1</Text>
          {"\n"}
          El video narrará el paso a paso de cómo debe ser la  
          succión del lactante durante la alimentación, teniendo  
          presente las características de la misma.
        </Text>
      </View>

      {/* Video 1 - Agarre */}
      <View style={styles.videoContainer}>
        <Video
          ref={videoRef1}
          source={require("@/assets/videos/Lactancia1.mp4")}
          style={styles.video}
          useNativeControls={false}
          resizeMode={ResizeMode.CONTAIN}
          isLooping={false}
          shouldPlay={false}
          onPlaybackStatusUpdate={(status) => handlePlaybackStatusUpdate(status, 1)}
        />
        
        {/* Controles personalizados flotantes para Video 1 */}
        <View style={styles.controlsOverlay}>
          <TouchableOpacity style={styles.controlButton} onPress={() => togglePlayPause(1)}>
            <Ionicons name={isPlaying1 ? "pause" : "play"} size={28} color="white" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.controlButton} onPress={() => toggleFullscreen(1)}>
            <Ionicons name="expand" size={28} color="white" />
          </TouchableOpacity>
        </View>
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
      <Text style={styles.sectionTitle}>Señales de alerta para identificar dificultades en la succión</Text>
      <Text style={styles.bullet}>
        ● Es una señal de alerta para darnos cuenta que el bebé no está agarrando el pezón bien (el proceso de succión no está siendo efectivo, que el agarre no está siendo eficiente y la transferencia de leche tampoco lo es).
      </Text>
      <Text style={styles.bullet}>
        ● En conjunto vemos que el bebé quiere abarcar mayor parte del seno (haciendo movimientos hacia delante) para poder hacer mayor extracción de leche.
      </Text>

      <View style={styles.divider} />

      {/* Subtítulo posturas */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Posturas para la lactancia materna</Text>
        <Text style={styles.paragraph}>
          <Text style={styles.videoTitle}>Video 2</Text>
          {"\n"}
          El video narrará el paso a paso de cómo se debe realizar  
          la posición que se puede adoptar durante el proceso de  
          lactancia, así mismo, se dirá cuál es el beneficio y cuándo  
          es recomendable realizarla.
        </Text>
      </View>

      {/* Texto posición recostada */}
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

      {/* Nota final */}
      <View style={styles.section}>
        <Text style={styles.paragraph}>
          Esta posición es beneficiosa para aquellas madres que por motivos externos no se pueden incorporar o desean momentos de descanso y previene dolor en la zona del petrio.
        </Text>
      </View>

      {/* Video 2 - Posturas */}
      <View style={styles.videoContainer}>
        <Video
          ref={videoRef2}
          source={require("@/assets/videos/Lactancia1.mp4")}
          style={styles.video}
          useNativeControls={false}
          resizeMode={ResizeMode.CONTAIN}
          isLooping={false}
          shouldPlay={false}
          onPlaybackStatusUpdate={(status) => handlePlaybackStatusUpdate(status, 2)}
        />
        
        {/* Controles personalizados flotantes para Video 2 */}
        <View style={styles.controlsOverlay}>
          <TouchableOpacity style={styles.controlButton} onPress={() => togglePlayPause(2)}>
            <Ionicons name={isPlaying2 ? "pause" : "play"} size={28} color="white" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.controlButton} onPress={() => toggleFullscreen(2)}>
            <Ionicons name="expand" size={28} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "left",
    marginVertical: 15,
    marginHorizontal: 16,
    color: "#333",
  },
  highlight: {
    color: "#5B0A59",
    textDecorationLine: "underline",
  },
  section: { 
    marginHorizontal: 15, 
    marginBottom: 15 
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#E5C4E5",
    color: "#5B0A59",
    padding: 8,
    borderRadius: 6,
    marginVertical: 10,
    marginHorizontal: 40,
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
    marginHorizontal: 15,
    marginBottom: 8,
    color: "#333",
  },
  videoContainer: {
    position: "relative",
    width: "100%",
    height: 220,
    backgroundColor: "#000",
    marginBottom: 15,
  },
  video: { 
    width: "100%", 
    height: "100%" 
  },
  videoTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#5B0A59",
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
    marginHorizontal: 15,
  },
  link: {
    fontSize: 14,
    color: "#5B0A59",
    textAlign: "center",
    marginVertical: 15,
    marginHorizontal: 15,
  },
});