import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useRouter } from 'expo-router';
import { supabase } from '@/lib/supabase'; // 👈 asegúrate de tenerlo importado

const signInSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

type SignInForm = z.infer<typeof signInSchema>;

export default function SignIn() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter(); // 👈 para navegar después del login

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: SignInForm) => {
    try {
      setLoading(true);
      setError(null);

      const { error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

      if (error) {
        setError(error.message);
        return;
      }

      // ✅ Navegar al home (ajusta la ruta a la que quieras ir)
      router.replace('/(tabs)/index' as any);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error inesperado');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('@/assets/imagenes/logo.jpeg')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Email */}
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <View style={styles.inputContainer}>
            <View style={styles.iconBox}>
              <Ionicons name="person-outline" size={20} color="#fff" />
            </View>
            <TextInput
              placeholder="Correo electrónico"
              placeholderTextColor="#8b8b8bff"
              style={styles.input}
              value={value}
              onChangeText={onChange}
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>
        )}
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

      {/* Password */}
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <View style={styles.inputContainer}>
            <View style={styles.iconBox}>
              <Ionicons name="lock-closed-outline" size={20} color="#fff" />
            </View>
            <TextInput
              placeholder="Contraseña"
              placeholderTextColor="#8b8b8bff"
              secureTextEntry
              style={styles.input}
              value={value}
              onChangeText={onChange}
            />
          </View>
        )}
      />
      {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

      {/* Mensaje de error de Supabase */}
      {error && <Text style={styles.error}>{error}</Text>}

      {/* Botón */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(onSubmit)}
        disabled={loading}
      >
        {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Iniciar Sesión</Text>}
      </TouchableOpacity>

      {/* Registro */}
      <Text style={styles.bottomText}>
        ¿No tienes una cuenta?{' '}
        <Link href="/signup" style={styles.linkText}>
          Regístrate
        </Link>
      </Text>
    </SafeAreaView>
  );
}

const MORADO = '#A348B0';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 25,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 260,
    height: 260,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
    overflow: 'hidden',
  },
  iconBox: {
    backgroundColor: MORADO,
    paddingHorizontal: 14,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  input: {
    flex: 1,
    paddingHorizontal: 12,
    height: 44,
    fontSize: 15,
    color: '#333',
    borderWidth: 0.5,
    borderColor: MORADO,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  error: {
    color: 'red',
    fontSize: 13,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    textAlign: 'center',
  },
  button: {
    backgroundColor: MORADO,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 25,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: 1,
    fontSize: 16,
  },
  bottomText: {
    textAlign: 'center',
    marginTop: 25,
    color: '#555',
  },
  linkText: {
    color: MORADO,
    fontWeight: 'bold',
  },
});
