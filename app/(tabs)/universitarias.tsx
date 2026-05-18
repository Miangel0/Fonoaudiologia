import { ScrollView, Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Video, ResizeMode, AVPlaybackStatus } from "expo-av";
import { useRef, useState } from "react";
import CustomHeader from "@/components/CustomHeader";
import ContentWidth from "@/components/ContentWidth";
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

  const handlePlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (status && "isPlaying" in status) {
      setIsPlaying(status.isPlaying);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <CustomHeader />

      <ContentWidth>
        <Text style={styles.title}>
          <Text style={styles.highlight}>Extracción y banco de leche</Text>
        </Text>

        <View style={styles.videoContainer}>
          <Video
            ref={videoRef}
            source={{
              uri: "https://res.cloudinary.com/dnecewfrp/video/upload/v1762931305/Lactancia1_rasdsr.mp4",
            }}
            style={styles.video}
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
            shouldPlay={false}
            isLooping
            onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
          />

          <View style={styles.controlsOverlay}>
            <TouchableOpacity style={styles.controlButton} onPress={togglePlayPause}>
              <Ionicons name={isPlaying ? "pause" : "play"} size={28} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.controlButton} onPress={toggleFullscreen}>
              <Ionicons name="expand" size={28} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Tips a tener en cuenta:</Text>
        <View style={styles.list}>
          <Text style={styles.bullet}>
            ● Las extracciones son más efectivas en la madrugada por el aumento de la hormona prolactina.
          </Text>
          <Text style={styles.bullet}>
            ● Cuando esté alimentando a su bebé, puede conectar el extractor del otro seno para facilitar la eyección de leche y mejorar la cantidad almacenada.
          </Text>
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
    color: "#333",
    textAlign: "left",
    marginVertical: 15,
    width: "100%",
  },
  highlight: {
    color: "#5B0A59",
    textDecorationLine: "underline",
  },
  videoContainer: {
    position: "relative",
    width: "100%",
    aspectRatio: 16 / 9,
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
    marginTop: 10,
    marginBottom: 8,
    color: "#333",
    width: "100%",
  },
  list: {
    marginBottom: 20,
    gap: 10,
    width: "100%",
  },
  bullet: {
    fontSize: 15,
    lineHeight: 22,
    color: "#333",
    textAlign: "justify",
  },
});
