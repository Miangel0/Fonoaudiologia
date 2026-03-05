import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import CustomHeader from "@/components/CustomHeader";
import { supabase } from "@/lib/supabase";

export default function Index() {
  const router = useRouter();

  // ✅ Cierre de sesión REAL
  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.replace("/signin");
  };

  // 🔥 ELIMINAR CUENTA (Apple obligatorio)
  const handleDeleteAccount = async () => {
    Alert.alert(
      "Eliminar cuenta",
      "¿Seguro que deseas eliminar tu cuenta? Esta acción es irreversible.",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Eliminar",
          style: "destructive",
          onPress: async () => {
            try {
              const { data } = await supabase.auth.getSession();
              const accessToken = data.session?.access_token;

              if (!accessToken) {
                Alert.alert("Error", "No se pudo validar la sesión.");
                return;
              }

              await fetch(
                `${process.env.EXPO_PUBLIC_SUPABASE_URL}/functions/v1/delete-account`,
                {
                  method: "POST",
                  headers: {
                    Authorization: `Bearer ${accessToken}`,
                  },
                }
              );

              await supabase.auth.signOut();
              router.replace("/signin");
            } catch (error) {
              Alert.alert(
                "Error",
                "No se pudo eliminar la cuenta. Intenta nuevamente."
              );
            }
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <CustomHeader />

      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.menuTitle}>MENÚ</Text>

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

          {/* CERRAR SESIÓN */}
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={handleLogout}
          >
            <Text style={styles.logoutButtonText}>Cerrar sesión</Text>
          </TouchableOpacity>

          {/* 🔥 ELIMINAR CUENTA (OBLIGATORIO APPLE) */}
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={handleDeleteAccount}
          >
            <Text style={styles.deleteButtonText}>Eliminar cuenta</Text>
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
    fontSize: 25,
    fontWeight: "bold",
    color: "#5B0A59",
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
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18,
    color: "#646464ff",
  },
  logoutButton: {
    backgroundColor: "#7a1079ee",
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 5,
  },
  logoutButtonText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  deleteButton: {
    marginTop: 10,
    paddingVertical: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#dc2626",
  },
  deleteButtonText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#dc2626",
  },
});
