import { ScrollView, Text, StyleSheet, View, TouchableOpacity, ImageBackground } from "react-native";
import CustomHeader from "@/components/CustomHeader";
import { Ionicons } from "@expo/vector-icons";
import { Audio } from "expo-av";
import { useState, useEffect } from "react";
import Slider from "@react-native-community/slider";

export default function Podcast() {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<string | null>(null);
  const [position, setPosition] = useState(0); // segundos actuales
  const [duration, setDuration] = useState(1); // duración total en segundos

  // Reproducir / Pausar
  const handlePlayPause = async (id: string, source: any) => {
    try {
      if (isPlaying === id && sound) {
        await sound.pauseAsync();
        setIsPlaying(null);
      } else {
        if (sound) {
          await sound.stopAsync();
          await sound.unloadAsync();
        }
        const { sound: newSound } = await Audio.Sound.createAsync(source, { shouldPlay: true });
        setSound(newSound);
        setIsPlaying(id);

        // Escuchar actualizaciones de estado
        newSound.setOnPlaybackStatusUpdate((status: any) => {
          if (status.isLoaded) {
            setPosition(status.positionMillis / 1000);
            setDuration(status.durationMillis ? status.durationMillis / 1000 : 1);
          }
        });
      }
    } catch (error) {
      console.error("Error al reproducir audio:", error);
    }
  };

  // Formato mm:ss
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Mover la barra
  const handleSeek = async (value: number) => {
    if (sound) {
      await sound.setPositionAsync(value * 1000);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <CustomHeader />

      <View style={styles.content}>
        <Text style={styles.title}>Podcast experiencias en madres universitarias</Text>

        {/* Podcast 1 */}
        <ImageBackground
          source={require("@/assets/imagenes/madreUno.jpg")}
          style={styles.podcastCard}
          imageStyle={{ borderRadius: 12 }}
        >
          <View style={styles.overlay}>
            <Text style={styles.podcastTitle}>Podcasts 1</Text>
            <Text style={styles.podcastDescription}>Breve descripción sobre el podcast</Text>

            {/* Controles */}
            <TouchableOpacity
              style={styles.playButton}
              onPress={() =>
                handlePlayPause(
                  "podcast1",
                  require("@/assets/audios/audio.mp3")
                )
              }
            >
              <Ionicons
                name={isPlaying === "podcast1" ? "pause" : "play"}
                size={28}
                color="white"
              />
            </TouchableOpacity>

            {/* Barra + tiempo */}
            {isPlaying === "podcast1" && (
              <View style={styles.sliderContainer}>
                <Text style={styles.time}>{formatTime(position)}</Text>
                <Slider
                  style={{ flex: 1, marginHorizontal: 8 }}
                  minimumValue={0}
                  maximumValue={duration}
                  value={position}
                  onSlidingComplete={handleSeek}
                  minimumTrackTintColor="#fff"
                  maximumTrackTintColor="#aaa"
                  thumbTintColor="#fff"
                />
                <Text style={styles.time}>{formatTime(duration - position)}</Text>
              </View>
            )}
          </View>
        </ImageBackground>

        {/* Podcast 2 */}
        <ImageBackground
        source={require("@/assets/imagenes/madreUno.jpg")}
        style={styles.podcastCard}
        imageStyle={{ borderRadius: 12 }}
        >
        <View style={styles.overlay}>
            <Text style={styles.podcastTitle}>Podcasts 2</Text>
            <Text style={styles.podcastDescription}>Breve descripción sobre el podcast</Text>

            {/* Botón Play/Pause */}
            <TouchableOpacity
            style={styles.playButton}
            onPress={() =>
                handlePlayPause(
                "podcast2",
                require("@/assets/audios/audio.mp3")
                )
            }
            >
            <Ionicons
                name={isPlaying === "podcast2" ? "pause" : "play"}
                size={28}
                color="white"
            />
            </TouchableOpacity>

            {/* Barra + tiempo (misma lógica que podcast1) */}
            {isPlaying === "podcast2" && (
            <View style={styles.sliderContainer}>
                <Text style={styles.time}>{formatTime(position)}</Text>
                <Slider
                style={{ flex: 1, marginHorizontal: 8 }}
                minimumValue={0}
                maximumValue={duration}
                value={position}
                onSlidingComplete={handleSeek}
                minimumTrackTintColor="#fff"
                maximumTrackTintColor="#aaa"
                thumbTintColor="#fff"
                />
                <Text style={styles.time}>{formatTime(duration - position)}</Text>
            </View>
            )}
        </View>
        </ImageBackground>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f8f8" },
  content: { paddingHorizontal: 12, paddingTop: 10, paddingBottom: 20 },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#5B0A59",
    textAlign: "center",
    marginBottom: 15,
  },
  podcastCard: {
    height: 150,
    marginBottom: 18,
    justifyContent: "flex-end",
    borderRadius: 12,
    overflow: "hidden",
  },
  overlay: {
    backgroundColor: "rgba(91, 10, 90, 0.22)",
    padding: 22,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  podcastTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  podcastDescription: {
    fontSize: 14,
    color: "white",
    marginBottom: 8,
  },
  playButton: {
    backgroundColor: "rgba(255,255,255,0.3)",
    alignSelf: "flex-start",
    padding: 8,
    borderRadius: 25,
    marginBottom: 8,
  },
  sliderContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  time: {
    color: "white",
    fontSize: 12,
  },
});
