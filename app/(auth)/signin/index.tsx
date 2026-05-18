import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  useWindowDimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'expo-router';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import ContentWidth from '@/components/ContentWidth';
import { getContentWidth } from '@/constants/layout';

const signInSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

type SignInForm = z.infer<typeof signInSchema>;

const MORADO = '#A348B0';

export default function SignIn() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { width, height } = useWindowDimensions();
  const logoSize = Math.min(width * 0.45, 220, height * 0.25);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: SignInForm) => {
    if (!isSupabaseConfigured) {
      setError('Configuración del servidor incompleta. Contacta al soporte.');
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

      if (signInError) {
        setError(signInError.message);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error inesperado');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={[
            styles.scroll,
            { paddingHorizontal: Math.max(16, (width - getContentWidth(width)) / 2) },
          ]}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <ContentWidth>
            <View style={styles.logoContainer}>
              <Image
                source={require('@/assets/imagenes/logo.jpeg')}
                style={{ width: logoSize, height: logoSize }}
                resizeMode="contain"
              />
            </View>

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
            {errors.email && (
              <Text style={styles.error}>{errors.email.message}</Text>
            )}

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
            {errors.password && (
              <Text style={styles.error}>{errors.password.message}</Text>
            )}

            {error && <Text style={styles.error}>{error}</Text>}

            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit(onSubmit)}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.buttonText}>Iniciar Sesión</Text>
              )}
            </TouchableOpacity>

            <Text style={styles.bottomText}>
              ¿No tienes una cuenta?{' '}
              <Link href="/signup" style={styles.linkText}>
                Regístrate
              </Link>
            </Text>
          </ContentWidth>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 24,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
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
