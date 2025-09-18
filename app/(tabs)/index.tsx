import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import CustomHeader from "@/components/CustomHeader";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header personalizado */}
      <CustomHeader />

      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.menuTitle}>MENU</Text>

        <View style={styles.menu}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/lactancia")}
          >
            <Text style={styles.buttonText}>Lactancia materna</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/posiciones")}
          >
            <Text style={styles.buttonText}>Posiciones y agarre</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/padre")}
          >
            <Text style={styles.buttonText}>Padre lactante</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/universitarias")}
          >
            <Text style={styles.buttonText}>
              Lactancia materna en madres universitarias
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/podcast")}
          >
            <Text style={styles.buttonText}>
              Podcast experiencias en madres universitarias
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/fonoaudiologia")}
          >
            <Text style={styles.buttonText}>
              Fonoaudiología y lactancia materna
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scroll: {
    padding: 20,
    alignItems: "center",
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5B0A59", // morado
    marginVertical: 20,
    textDecorationLine: "underline",
  },
  menu: {
    width: "100%",
    gap: 15,
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 3, // sombra en Android
    shadowColor: "#000", // sombra en iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
    color: "#333",
  },
});
