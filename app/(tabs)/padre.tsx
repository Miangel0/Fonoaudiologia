import { ScrollView, Text, StyleSheet, View } from "react-native";
import CustomHeader from "@/components/CustomHeader";

export default function Padre() {
  return (
    <ScrollView style={styles.container}>
      <CustomHeader />

      <Text style={styles.title}>Padre lactante</Text>

      {/* Primera sección */}
      <Text style={styles.sectionTitle}>Recomendaciones generales</Text>
      <View style={styles.list}>
        <Text style={styles.bullet}>● El padre y la madre deben involucrarse en diferentes actividades y responsabilidades, llegando a un consenso en horarios y situaciones para cubrir las necesidades del lactante.</Text>
        <Text style={styles.bullet}>● El espacio utilizado para el proceso de alimentación debe contar con los correctos pasos de asepsia.</Text>
        <Text style={styles.bullet}>● Es importante que el padre del lactante y los familiares tomen responsabilidad al momento de los tiempos de alimentación para contribuir al descanso de la madre.</Text>
        <Text style={styles.bullet}>● Las rutinas de aseo del lugar de alimentación y el lactante deben ser compartidas entre madre y padre, estableciendo horarios acordados para el cambio de pañal y aseo personal del lactante.</Text>
      </View>

      {/* Segunda sección */}
      <Text style={styles.sectionTitle}>Recomendaciones para el padre</Text>
      <View style={styles.list}>
        <Text style={styles.bullet}>● Involucrarse en las actividades de la vida diaria del lactante contribuye a fortalecer el vínculo entre padre e hijo.</Text>
        <Text style={styles.bullet}>● El pecho paterno, al igual que el materno, genera diferentes emociones en el lactante como amor, cuidado y protección.</Text>
        <Text style={styles.bullet}>● Evitar comentarios sin validez científica y mitos como: {"\n"} 
          {"   "}“¿Qué medicamentos sirven para la producción de leche?”,{"\n"}
          {"   "}“No será buena productora de leche debido al tamaño del seno”,{"\n"}
          {"   "}“No podrás comer comida chatarra porque la leche sale cortada”, entre otros.
        </Text>
        <Text style={styles.bullet}>● Durante la alimentación, el padre puede ayudar en facilitar posturas y acomodación del lactante para un proceso exitoso.</Text>
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
