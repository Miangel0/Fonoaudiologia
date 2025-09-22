import { ScrollView, Text, StyleSheet, View } from "react-native";
import CustomHeader from "@/components/CustomHeader";

export default function Fonoaudiologia() {
  return (
    <ScrollView style={styles.container}>
      <CustomHeader />

      {/* Título principal */}
      <Text style={styles.title}>
        <Text style={styles.highlight}>Fonoaudiología y lactancia materna</Text>
      </Text>

      {/* Bloque 1 */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Patrón oromotor en el desarrollo del bebé lactante</Text>
        <Text style={styles.paragraph}>
          El patrón oromotor permite al bebé coordinar movimientos de succión,
          deglución y respiración, esenciales en el desarrollo de la lactancia.
        </Text>
      </View>

      {/* Bloque 2 */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Proceso de la succión en el lactante</Text>
        <Text style={styles.paragraph}>
          La succión en el lactante es un proceso rítmico y coordinado que
          garantiza una alimentación efectiva y fortalece la musculatura oral.
        </Text>
      </View>

      {/* Bloque 3 */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>
          Proceso de la respiración y su importancia en el habla
        </Text>
        <Text style={styles.paragraph}>
          Una respiración adecuada es fundamental para el desarrollo del habla,
          ya que proporciona el soporte necesario para la producción de sonidos.
        </Text>
      </View>

      {/* Bloque 4 */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>El habla</Text>
        <Text style={styles.paragraph}>
          El habla es el resultado de la integración de procesos orales,
          respiratorios y neurológicos, que se desarrollan desde la etapa de
          lactancia.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#fff" 
  },
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
    marginBottom: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#5B0A59",
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 22,
    color: "#333",
    textAlign: "justify",
  },
});