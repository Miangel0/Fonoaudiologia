import { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import { zodResolver } from '@hookform/resolvers/zod';
import { supabase } from '@/lib/supabase';
import { Link, useRouter } from 'expo-router';
import { useAuth } from '@/providers/AuthProvider';

// 📌 Esquema para datos personales (campos opcionales)
const personalSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),

  age: z.coerce.number()
    .min(18, 'Debes tener al menos 18 años'),

  city: z
    .string()
    .min(2, 'La ciudad debe tener al menos 2 caracteres')
    .optional()
    .or(z.literal('')),

  maritalStatus: z
    .string()
    .min(2, 'Estado civil inválido')
    .optional()
    .or(z.literal('')),

  childrenNumber: z
    .string()
    .regex(/^\d+$/, 'Número inválido')
    .optional()
    .or(z.literal('')),

  occupation: z
    .string()
    .min(2, 'Ocupación inválida')
    .optional()
    .or(z.literal('')),
});

// 📌 Esquema para datos de cuenta
const accountSchema = z
  .object({
    email: z.string().email('Correo electrónico inválido'),
    password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmPassword'],
  });

export default function SignUp() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { session } = useAuth();

  useEffect(() => {
    if (session) {
      router.replace('/(tabs)');
    }
  }, [session, router]);

  const personalForm = useForm({
    resolver: zodResolver(personalSchema),
    defaultValues: {
      name: '',
      age: '',
      city: '',
      maritalStatus: '',
      childrenNumber: '',
      occupation: '',
    },
  });

  const accountForm = useForm({
    resolver: zodResolver(accountSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const handleRegister = async (accountData: any) => {
    try {
      setLoading(true);
      setError(null);

      const personalData = personalForm.getValues();

      // 🔥 Limpia campos vacíos (Apple-friendly)
      const cleanData = Object.fromEntries(
        Object.entries(personalData).filter(
          ([_, value]) => value !== '' && value !== undefined
        )
      );

      const { error: signupError } = await supabase.auth.signUp({
        email: accountData.email,
        password: accountData.password,
        options: {
          data: cleanData, // solo datos que el usuario quiso dar
        },
      });

      if (signupError) throw signupError;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image
          source={require('@/assets/imagenes/logo.jpeg')}
          style={styles.logo}
        />

        {/* Paso 1 */}
        {step === 1 && (
          <View style={styles.form}>
            <Text style={styles.title}>REGISTRO</Text>

            <Controller
              control={personalForm.control}
              name="name"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder="Nombre completo"
                  placeholderTextColor="#777"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />

            <Controller
              control={personalForm.control}
              name="age"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder="Edad"
                  placeholderTextColor="#777"
                  keyboardType="numeric"
                  onChangeText={onChange}
                  value={String(value)}
                />
              )}
            />

            <Controller
              control={personalForm.control}
              name="city"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder="Ciudad (opcional)"
                  placeholderTextColor="#777"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />

            <Controller
              control={personalForm.control}
              name="maritalStatus"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder="Estado civil (opcional)"
                  placeholderTextColor="#777"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />

            <Controller
              control={personalForm.control}
              name="childrenNumber"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder="Número de hijos (opcional)"
                  placeholderTextColor="#777"
                  keyboardType="numeric"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />

            <Controller
              control={personalForm.control}
              name="occupation"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder="Ocupación (opcional)"
                  placeholderTextColor="#777"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={personalForm.handleSubmit(() => setStep(2))}
            >
              <Text style={styles.buttonText}>SIGUIENTE</Text>
            </TouchableOpacity>

            <Text style={styles.linkText}>
              ¿Tienes una cuenta?{' '}
              <Link href="/signin" style={styles.link}>
                Inicia Sesión
              </Link>
            </Text>
          </View>
        )}

        {/* Paso 2 */}
        {step === 2 && (
          <View style={styles.form}>
            <Text style={styles.title}>CREA TU CUENTA</Text>

            <Controller
              control={accountForm.control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder="Correo electrónico"
                  placeholderTextColor="#777"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />

            <Controller
              control={accountForm.control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder="Contraseña"
                  placeholderTextColor="#777"
                  secureTextEntry
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />

            <Controller
              control={accountForm.control}
              name="confirmPassword"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder="Confirmar contraseña"
                  placeholderTextColor="#777"
                  secureTextEntry
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />

            {error && <Text style={styles.errorText}>{error}</Text>}

            <TouchableOpacity
              style={styles.button}
              onPress={accountForm.handleSubmit(handleRegister)}
              disabled={loading}
            >
              <Text style={styles.buttonText}>
                {loading ? 'Cargando...' : 'REGISTRARSE'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setStep(1)}>
              <Text style={styles.linkText}>← Volver</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  logo: {
    width: 160,
    height: 160,
    alignSelf: 'center',
    marginBottom: 16,
    resizeMode: 'contain',
  },
  form: {
    gap: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#A348B0',
    marginBottom: 20,
    textAlign: 'center',
    textDecorationLine: 'underline',
    textTransform: 'uppercase',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 12,
    height: 45,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#A348B0',
    borderRadius: 8,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  linkText: {
    color: '#333',
    textAlign: 'center',
    marginTop: 16,
    fontSize: 14,
  },
  link: {
    color: '#A348B0',
    fontWeight: 'bold',
  },
  errorText: {
    color: '#dc2626',
    fontSize: 14,
    textAlign: 'center',
  },
});
