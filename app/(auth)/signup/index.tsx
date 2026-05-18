import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  useWindowDimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { zodResolver } from '@hookform/resolvers/zod';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { Link } from 'expo-router';
import ContentWidth from '@/components/ContentWidth';
import { getContentWidth } from '@/constants/layout';

const personalSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  age: z.coerce.number().min(18, 'Debes tener al menos 18 años'),
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
  const { width, height } = useWindowDimensions();
  const logoSize = Math.min(width * 0.35, 160, height * 0.18);

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

  const handleRegister = async (accountData: z.infer<typeof accountSchema>) => {
    if (!isSupabaseConfigured) {
      setError('Configuración del servidor incompleta. Contacta al soporte.');
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const personalData = personalForm.getValues();
      const cleanData = Object.fromEntries(
        Object.entries(personalData).filter(
          ([, value]) => value !== '' && value !== undefined
        )
      );

      const { error: signupError } = await supabase.auth.signUp({
        email: accountData.email,
        password: accountData.password,
        options: { data: cleanData },
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
            <Image
              source={require('@/assets/imagenes/logo.jpeg')}
              style={{ width: logoSize, height: logoSize, alignSelf: 'center', marginBottom: 16 }}
              resizeMode="contain"
            />

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
                      autoCapitalize="none"
                      keyboardType="email-address"
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
          </ContentWidth>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flex: { flex: 1 },
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 24,
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
