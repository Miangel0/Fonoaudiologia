import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  useWindowDimensions,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function CustomHeader() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const headerHeight = Math.min(Math.max(width * 0.22, 140), 220);

  return (
    <ImageBackground
      source={require('../assets/imagenes/madreUno.jpg')}
      style={[styles.background, { height: headerHeight }]}
      resizeMode="cover"
    >
      <TouchableOpacity
        style={styles.overlay}
        onPress={() => router.push('/(tabs)')}
        activeOpacity={0.85}
      >
        <Image
          source={require('../assets/imagenes/boton-de-inicio.png')}
          style={styles.icon}
        />
        <View style={styles.separator} />
        <Text style={styles.title}>
          MADRES{'\n'} LACTANTES
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5b0a5a87',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    tintColor: 'white',
  },
  separator: {
    width: 6,
    height: 40,
    backgroundColor: 'white',
    marginHorizontal: 10,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 22,
    flexShrink: 1,
  },
});
