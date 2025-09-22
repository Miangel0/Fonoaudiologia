import { ScrollView, Text, StyleSheet, View, Linking, TouchableOpacity } from "react-native";
import CustomHeader from "@/components/CustomHeader";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

export default function Lactancia() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpanded(prev => (prev === section ? null : section));
  };

  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header sin afectar por padding */}
      <CustomHeader />

      {/* Contenedor interno con padding */}
      <View style={styles.content}>
        {/* Título principal con estilo de menú */}
        <Text style={styles.menuTitle}>Lactancia materna</Text>

        {/* Descripción inicial */}
        <Text style={styles.paragraph}>
          La lactancia materna es conocida de forma mundial como el mejor alimento
          para los recién nacidos, el cual brinda nutrientes óptimos para un
          apropiado proceso de crecimiento y desarrollo. La Organización Mundial
          de la Salud (OMS), recomienda la lactancia exclusiva hasta los seis
          meses, donde, el único alimento es ofrecido por la madre por medio del
          seno y no se suministra algo diferente a leche materna y la lactancia
          materna de forma complementaria por lo menos hasta los 2 años de edad,
          donde, se inicia con la ingesta de diversos alimentos que entran a
          complementar los nutrientes que la leche materna ya no aporta al bebé.
        </Text>

        <Text style={styles.paragraph}>
          Por otro lado, se encuentran los links de ingreso a los blogs que se
          encuentran vinculados a la aplicación, tales como:
        </Text>

        {/* Sección de blogs */}
        <View style={styles.blogsContainer}>
          <Text style={styles.blogTitle}>“SINA”:</Text>
          <TouchableOpacity onPress={() => openLink("https://elblogdesina.wordpress.com/")}>
            <Text style={styles.link}>https://elblogdesina.wordpress.com/</Text>
          </TouchableOpacity>

          <Text style={styles.blogTitle}>“Lactando”:</Text>
          <TouchableOpacity onPress={() => openLink("http://www.lactando.org/about/")}>
            <Text style={styles.link}>http://www.lactando.org/about/</Text>
          </TouchableOpacity>

          <Text style={styles.blogTitle}>“Piel a piel”:</Text>
          <TouchableOpacity onPress={() => openLink("http://pielapiel.blogspot.com/")}>
            <Text style={styles.link}>http://pielapiel.blogspot.com/</Text>
          </TouchableOpacity>

          <Text style={styles.blogTitle}>“Ser padres”:</Text>
          <TouchableOpacity onPress={() => openLink("https://www.serpadres.es/antes-del-embarazo")}>
            <Text style={styles.link}>https://www.serpadres.es/antes-del-embarazo</Text>
          </TouchableOpacity>

          <Text style={styles.blogTitle}>“Lactapp”:</Text>
          <TouchableOpacity onPress={() => openLink("https://blog.lactapp.es/")}>
            <Text style={styles.link}>https://blog.lactapp.es/</Text>
          </TouchableOpacity>
        </View>

        {/* Secciones tipo acordeón */}
        <AccordionSection
          title="Beneficios de la lactancia materna"
          isExpanded={expanded === "beneficios"}
          onPress={() => toggleSection("beneficios")}
        >
          <Text style={styles.paragraph}>
            Beneficios para la madre:{"\n"}- Refuerza el vínculo afectivo entre madre e hijo{"\n"}- Es costo efectivo{"\n"}- Disminuye el riesgo de cáncer de mama y ovarios{"\n"}- Producción de oxitocina, ayuda al útero a recuperar su tamaño{"\n"}- Gasto calórico que favorece la pérdida de peso{"\n"}- Método de planificación{"\n\n"}
            Beneficios para el infante:{"\n"}- Ayuda en el desarrollo y crecimiento{"\n"}- Proporciona nutrientes necesarios durante los primeros seis meses{"\n"}- Contribuye al desarrollo de dientes y músculos faciales{"\n"}- Reduce riesgo de obesidad o diabetes
          </Text>
        </AccordionSection>

        <AccordionSection
          title="Anatomía de la lactancia materna"
          isExpanded={expanded === "anatomia"}
          onPress={() => toggleSection("anatomia")}
        >
          <Text style={styles.paragraph}>
            Anatomía de la mama: 15-20 lóbulos conectados a conductos galactóforos que llegan al pezón. Parte externa: areola con glándulas de Montgomery. Tipos de pezón: normal, plano, invertido. El usuario reconocerá estructuras y procesos de lactancia materna.
          </Text>
        </AccordionSection>

        <AccordionSection
          title="Consulta E-lactancia"
          isExpanded={expanded === "consulta"}
          onPress={() => toggleSection("consulta")}
        >
          <Text style={styles.paragraph}>
            Información y link a video:{"\n"}
            <Text style={styles.link} onPress={() => openLink("https://www.youtube.com/watch?v=dQw4w9WgXcQ")}>
              Ver video
            </Text>
          </Text>
        </AccordionSection>

        <AccordionSection
          title="Relactación"
          isExpanded={expanded === "relactacion"}
          onPress={() => toggleSection("relactacion")}
        >
          <Text style={styles.paragraph}>
            Masajes circulares en ambos senos para estimular lactancia. Tomar en vaso o cuchara, aumentar contacto piel a piel, transmitir deseo de amamantar.{"\n\n"}
            Link video:{" "}
            <Text style={styles.link} onPress={() => openLink("https://www.youtube.com/watch?v=Vk_fRACbUZY")}>
              Ver video relactación
            </Text>
          </Text>
        </AccordionSection>
      </View>
    </ScrollView>
  );
}

// Componente AccordionSection reutilizable
const AccordionSection = ({ title, isExpanded, onPress, children }: any) => (
  <View style={styles.sectionContainer}>
    <TouchableOpacity style={styles.section} onPress={onPress}>
      <MaterialIcons
        name={isExpanded ? "expand-less" : "expand-more"}
        size={24}
        color="#9C27B0"
      />
      <Text style={styles.sectionText}>{title}</Text>
    </TouchableOpacity>
    {isExpanded && <View style={styles.sectionContent}>{children}</View>}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 20,
  },
  menuTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#5B0A59",
    marginVertical: 20,
    textDecorationLine: "underline",
    textAlign: "left",
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 22,
    color: "#333",
    textAlign: "justify",
    marginBottom: 12,
  },
  link: {
    color: "#b555b3ff",
    textDecorationLine: "underline",
  },
  blogsContainer: {
    marginBottom: 20,
  },
  blogTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
    color: "#333",
  },
  sectionContainer: {
    marginBottom: 12,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#acacaca9",
  },
  sectionText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#333",
    marginLeft: 8,
  },
  sectionContent: {
    paddingVertical: 10,
  },
});
