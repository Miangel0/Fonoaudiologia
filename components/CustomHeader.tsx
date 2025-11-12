// components/CustomHeader.tsx
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from "react-native";
import { useRouter } from "expo-router";

export default function CustomHeader() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../assets/imagenes/madreUno.jpg")} 
      style={styles.background}
      resizeMode="cover"
    >
      <TouchableOpacity style={styles.overlay} onPress={() => router.push("/")}>
        <Image
          source={require("../assets/imagenes/boton-de-inicio.png")} 
          style={styles.icon}
        />

        {/* Separador vertical */}
        <View style={styles.separator} />

        <Text style={styles.title}>
          MADRES{"\n"} LACTANTES
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: 200,
    justifyContent: "center",
  },
  overlay: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#5b0a5a87", 
    paddingVertical: 75,
    paddingHorizontal: 16,
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    tintColor: "white", 
  },
  separator: {
    width: 6,              
    height: 40,           
    backgroundColor: "white",
    marginHorizontal: 10,  
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 22,
  },
});
