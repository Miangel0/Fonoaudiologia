import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  useWindowDimensions,
} from "react-native";
import CustomHeader from "@/components/CustomHeader";
import ContentWidth from "@/components/ContentWidth";
import { Ionicons } from "@expo/vector-icons";
import { Audio } from "expo-av";
import { useState, useEffect, useRef } from "react";
import Slider from "@react-native-community/slider";

const PODCASTS = [
  {
    id: "podcast1",
    title: "Ser mamá, ser real",
    uri: "https://res.cloudinary.com/dnecewfrp/video/upload/v1762929396/Audio1_tcphjt.mp3",
  },
  {
    id: "podcast2",
    title: "Lactando con papá",
    uri: "https://res.cloudinary.com/dnecewfrp/video/upload/v1762929403/Audio2_permxt.mp3",
  },
  {
    id: "podcast3",
    title: "Brindando más que leche",
    uri: "https://res.cloudinary.com/dnecewfrp/video/upload/v1762929395/Audio3_dkq4zo.mp3",
  },
] as const;

export default function Podcast() {
  const { width } = useWindowDimensions();
  const cardHeight = Math.min(Math.max(width * 0.35, 160), 220);

  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const soundRef = useRef<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<string | null>(null);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(1);

  useEffect(() => {
    Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
      staysActiveInBackground: false,
      shouldDuckAndroid: true,
    }).catch(console.error);

    return () => {
      soundRef.current?.unloadAsync().catch(console.error);
    };
  }, []);

  const handlePlayPause = async (id: string, uri: string) => {
    try {
      if (isPlaying === id && sound) {
        await sound.pauseAsync();
        setIsPlaying(null);
        return;
      }

      if (sound) {
        await sound.stopAsync();
        await sound.unloadAsync();
        soundRef.current = null;
      }

      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri },
        { shouldPlay: true }
      );
      soundRef.current = newSound;
      setSound(newSound);
      setIsPlaying(id);

      newSound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded) {
          setPosition(status.positionMillis / 1000);
          setDuration(
            status.durationMillis ? status.durationMillis / 1000 : 1
          );
        }
      });
    } catch (error) {
      console.error("Error al reproducir audio:", error);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleSeek = async (value: number) => {
    if (sound) {
      await sound.setPositionAsync(value * 1000);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <CustomHeader />

      <ContentWidth>
        <Text style={styles.title}>
          <Text style={styles.highlight}>
            Podcast experiencias en madres universitarias
          </Text>
        </Text>

        {PODCASTS.map((podcast) => (
          <ImageBackground
            key={podcast.id}
            source={require("@/assets/imagenes/madreUno.jpg")}
            style={[styles.podcastCard, { height: cardHeight }]}
            imageStyle={{ borderRadius: 12 }}
          >
            <View style={styles.overlay}>
              <Text style={styles.podcastTitle}>Podcasts</Text>
              <Text style={styles.podcastDescription}>{podcast.title}</Text>

              <TouchableOpacity
                style={styles.playButton}
                onPress={() => handlePlayPause(podcast.id, podcast.uri)}
              >
                <Ionicons
                  name={isPlaying === podcast.id ? "pause" : "play"}
                  size={28}
                  color="white"
                />
              </TouchableOpacity>

              {isPlaying === podcast.id && (
                <View style={styles.sliderContainer}>
                  <Text style={styles.time}>{formatTime(position)}</Text>
                  <Slider
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={duration}
                    value={position}
                    onSlidingComplete={handleSeek}
                    minimumTrackTintColor="#fff"
                    maximumTrackTintColor="#aaa"
                    thumbTintColor="#fff"
                  />
                  <Text style={styles.time}>
                    {formatTime(duration - position)}
                  </Text>
                </View>
              )}
            </View>
          </ImageBackground>
        ))}
      </ContentWidth>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    alignItems: "center",
    paddingBottom: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 15,
    color: "#333",
    width: "100%",
  },
  highlight: {
    color: "#5B0A59",
    textDecorationLine: "underline",
  },
  podcastCard: {
    width: "100%",
    marginBottom: 18,
    justifyContent: "flex-end",
    borderRadius: 12,
    overflow: "hidden",
  },
  overlay: {
    backgroundColor: "rgba(91, 10, 90, 0.28)",
    padding: 24,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  podcastTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  podcastDescription: {
    fontSize: 15,
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
    width: "100%",
  },
  slider: {
    flex: 1,
    marginHorizontal: 8,
  },
  time: {
    color: "white",
    fontSize: 12,
  },
});
