import { ScrollView, Text, StyleSheet, View } from "react-native";
import CustomHeader from "@/components/CustomHeader";

export default function Fonoaudiologia() {
  return (
    // NO poner padding aquí para no afectar al header
    <ScrollView style={styles.container}>
      <CustomHeader />

      {/* Contenedor interior: todo el padding/márgenes salen aquí */}
      <View style={styles.content}>
        <Text style={styles.title}>Fonoaudiología y lactancia materna</Text>

        {/* Bloque 1 */}
        <View style={styles.card}>
          <Text style={styles.subtitle}>
            Patrón oromotor en el desarrollo del bebé lactante
          </Text>
          <Text style={styles.paragraph}>
            El patrón oromotor permite al bebé coordinar movimientos de succión,
            deglución y respiración, esenciales en el desarrollo de la lactancia.
          </Text>
        </View>

        {/* Bloque 2 */}
        <View style={styles.card}>
          <Text style={styles.subtitle}>Proceso de la succión en el lactante</Text>
          <Text style={styles.paragraph}>
            La succión en el lactante es un proceso rítmico y coordinado que
            garantiza una alimentación efectiva y fortalece la musculatura oral.
          </Text>
        </View>

        {/* Bloque 3 */}
        <View style={styles.card}>
          <Text style={styles.subtitle}>
            Proceso de la respiración y su importancia en el habla
          </Text>
          <Text style={styles.paragraph}>
            Una respiración adecuada es fundamental para el desarrollo del habla,
            ya que proporciona el soporte necesario para la producción de sonidos.
          </Text>
        </View>

        {/* Bloque 4 */}
        <View style={styles.card}>
          <Text style={styles.subtitle}>El habla</Text>
          <Text style={styles.paragraph}>
            El habla es el resultado de la integración de procesos orales,
            respiratorios y neurológicos, que se desarrollan desde la etapa de
            lactancia.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // NO padding aquí: así no se altera el header
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },

  // Este View contiene todo el espaciado para el contenido
  content: {
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingBottom: 20,
  },

  // Título centrado (sin marginTop grande para no "empujar" visualmente el header)
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#5B0A59", // morado consistente
    textAlign: "center",
    marginBottom: 12,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 14,
    marginBottom: 14,
    // sombra ligera
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 1,
  },

  subtitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#5B0A59",
    marginBottom: 8,
  },

  paragraph: {
    fontSize: 15,
    lineHeight: 22,
    color: "#444",
    textAlign: "justify",
  },
});
