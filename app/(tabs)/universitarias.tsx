import { ScrollView, Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Video, ResizeMode, AVPlaybackStatus } from "expo-av";
import { useRef, useState } from "react";
import CustomHeader from "@/components/CustomHeader";
import { Ionicons } from "@expo/vector-icons";

export default function ExtraccionLeche() {
  const videoRef = useRef<Video>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = async () => {
    if (videoRef.current) {
      if (isPlaying) {
        await videoRef.current.pauseAsync();
      } else {
        await videoRef.current.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleFullscreen = async () => {
    if (videoRef.current) {
      await videoRef.current.presentFullscreenPlayer();
    }
  };

  // Estado de reproducción del video
  const handlePlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (status && "isPlaying" in status) {
      setIsPlaying(status.isPlaying);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <CustomHeader />

      {/* Título */}
      <Text style={styles.title}>
        <Text style={styles.highlight}>Extracción y banco de leche</Text>
      </Text>

      {/* Contenedor del Video */}
      <View style={styles.videoContainer}>
        <Video
        ref={videoRef}
        source={require("@/assets/videos/Lactancia1.mp4")}
        style={styles.video}
        useNativeControls={true}   // ✅ muestra play, pausa, fullscreen
        resizeMode={ResizeMode.CONTAIN} // ✅ mantiene proporciones sin cortar
        shouldPlay={true}   // ✅ arranca reproduciendo automáticamente
        isLooping={true}    // ✅ se repite en bucle
        onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
      />


        {/* Controles personalizados flotantes */}
        <View style={styles.controlsOverlay}>
          <TouchableOpacity style={styles.controlButton} onPress={togglePlayPause}>
            <Ionicons name={isPlaying ? "pause" : "play"} size={28} color="white" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.controlButton} onPress={toggleFullscreen}>
            <Ionicons name="expand" size={28} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Texto de tips */}
      <Text style={styles.sectionTitle}>Tips a tener en cuenta:</Text>
      <View style={styles.list}>
        <Text style={styles.bullet}>
          ● Las extracciones son más efectivas en la madrugada por el aumento de la hormona prolactina.
        </Text>
        <Text style={styles.bullet}>
          ● Cuando esté alimentando a su bebé, puede conectar el extractor del otro seno para facilitar la eyección de leche y mejorar la cantidad almacenada.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#333",
    textAlign: "left",
    marginVertical: 15,
    marginHorizontal: 16,
  },
  highlight: {
    color: "#5B0A59",
    textDecorationLine: "underline",
  },
  videoContainer: {
    position: "relative",
    width: "100%",
    height: 250,
    marginBottom: 15,
    backgroundColor: "#000",
    borderRadius: 10,
    overflow: "hidden",
  },
  video: {
    width: "100%",
    height: "100%",
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
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 8,
    color: "#333",
  },
  list: {
    marginHorizontal: 20,
    marginBottom: 20,
    gap: 10,
  },
  bullet: {
    fontSize: 15,
    lineHeight: 22,
    color: "#333",
    textAlign: "justify",
  },
});
