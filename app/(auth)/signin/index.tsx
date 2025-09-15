/* import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  
const signInSchema = z.object({
    email: z.string().email('Email inválido'),
    password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres').max(20, 'La contraseña es demasiada larga')
});

type SignInForm = z.infer<typeof signInSchema>;
export default function SignIn(){
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const { control, handleSubmit, formState: {errors} } = useForm<SignForm>({
        resolver: zodResolver(signInSchema)
    });

    const onSubmit = async (data: SignInForm) => {
        try {
            setLoading(true);
            setError(null);
            // TODO: ENVIAR DATOS AL SERVIDOR
        } catch (err){
            setError(err instanceof Error ? err.message : 'ha ocurrido un error');
        } finally {
            setLoading(false);
        }
    }
    return (
        <SafeAreaView>
            <View>
                <Text>¡Hola de nuevo!</Text>
                <Text>
                    Inicia sesión para continuar usando la aplicación y gestionar tus tareas.
                </Text>

                <View>
                    <Controller
                        control={control}
                        name='email'
                        render = {{{ field: { onchange, value } }} => (
                            <View>
                                <Text>Correo Electronico</Text>
                                <View>
                                    <Ionicons></Ionicons>
                                </View>
                            </View>
                        )}
                        />

                </View>
            </View>
        </SafeAreaView>
    )
}; */