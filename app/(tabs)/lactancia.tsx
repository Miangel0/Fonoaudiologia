import { ScrollView, Text, StyleSheet, View } from "react-native";
import CustomHeader from "@/components/CustomHeader";

export default function Lactancia() {
  return (
    <ScrollView style={styles.container}>
      <CustomHeader />

      <Text style={styles.title}>Lactancia Materna</Text>

      {/* Sección 1 */}
      <Text style={styles.sectionTitle}>Beneficios de la lactancia materna</Text>
      <View style={styles.list}>
        <Text style={styles.bullet}>
          ● La lactancia materna fortalece el sistema inmunológico del bebé y lo protege de enfermedades comunes.
        </Text>
        <Text style={styles.bullet}>
          ● Favorece el vínculo emocional entre madre e hijo durante los primeros meses de vida.
        </Text>
        <Text style={styles.bullet}>
          ● Contribuye al desarrollo cognitivo y físico del bebé de manera natural.
        </Text>
      </View>

      {/* Sección 2 */}
      <Text style={styles.sectionTitle}>Anatomía de la lactancia materna</Text>
      <View style={styles.list}>
        <Text style={styles.bullet}>
          ● La glándula mamaria está diseñada para producir y almacenar leche de forma continua.
        </Text>
        <Text style={styles.bullet}>
          ● La succión estimula la producción de oxitocina, facilitando la salida de la leche.
        </Text>
        <Text style={styles.bullet}>
          ● La posición y el agarre adecuados son fundamentales para un proceso exitoso.
        </Text>
      </View>

      {/* Sección 3 */}
      <Text style={styles.sectionTitle}>Consulta E-lactancia</Text>
      <View style={styles.list}>
        <Text style={styles.bullet}>
          ● La plataforma E-lactancia ofrece información actualizada sobre medicamentos compatibles con la lactancia.
        </Text>
        <Text style={styles.bullet}>
          ● Ayuda a las madres a resolver dudas comunes sobre alimentación y cuidados.
        </Text>
        <Text style={styles.bullet}>
          ● Es una herramienta gratuita y confiable para profesionales y familias.
        </Text>
      </View>

      {/* Sección 4 */}
      <Text style={styles.sectionTitle}>Relactación</Text>
      <View style={styles.list}>
        <Text style={styles.bullet}>
          ● La relactación es el proceso de recuperar la producción de leche materna después de haber disminuido o cesado.
        </Text>
        <Text style={styles.bullet}>
          ● Requiere constancia, apoyo y acompañamiento profesional.
        </Text>
        <Text style={styles.bullet}>
          ● Puede lograrse mediante estimulación frecuente y el uso de técnicas adecuadas.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#5B0A59", // morado
    textAlign: "center",
    marginVertical: 15,
    textDecorationLine: "underline",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 15,
    marginTop: 15,
    marginBottom: 8,
    color: "#333",
  },
  list: {
    marginHorizontal: 20,
    marginBottom: 10,
    gap: 10,
  },
  bullet: {
    fontSize: 15,
    lineHeight: 22,
    color: "#333",
    textAlign: "justify",
  },
});
