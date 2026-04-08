import { useFonts } from 'expo-font';
import { Stack, router } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import AuthProvider, { useAuth } from '@/providers/AuthProvider';

SplashScreen.preventAutoHideAsync();

// Root layout que maneja la navegación según autenticación
function RootLayoutNav() {
  const { loading, session } = useAuth();
  const [fontsLoaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    // Redirigir según estado de autenticación
    if (!loading) {
      if (session) {
        // Usuario autenticado → Ir a tabs
        router.replace('/(tabs)');
      } else {
        // Usuario no autenticado → Ir a signin
        router.replace('/(auth)/signin');
      }
    }
  }, [session, loading]);

  if (!fontsLoaded || loading) {
    return null; // Mostrar splash mientras carga
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen 
        name="(auth)/signin/index" 
        options={{ animation: "ios_from_right", gestureEnabled: false }} 
      />
      <Stack.Screen 
        name="(auth)/signup/index" 
        options={{ animation: "ios_from_right", gestureEnabled: false }} 
      />
    </Stack>
  );
}

// Wrapper con AuthProvider
export default function RootLayout() {
  return (
    <AuthProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar style="dark" />
        <RootLayoutNav />
      </GestureHandlerRootView>
    </AuthProvider>
  );
}
