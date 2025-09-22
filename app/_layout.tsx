import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import AuthProvider from '@/providers/AuthProvider';

// Evita que la pantalla inicial se oculte hasta que las fuentes estén cargadas.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AuthProvider>
      <GestureHandlerRootView>
        <Stack>
          <Stack.Screen name="(tabs)/index" options={{ headerShown: false }} />
          <Stack.Screen 
          name="(auth)/signin/index" options={{ headerShown: false, animation: "ios_from_right", gestureEnabled:false }} />
          <Stack.Screen 
          name="(auth)/signup/index" options={{ headerShown: false, animation: "ios_from_right", gestureEnabled:false }} />
          <Stack.Screen name="+not-found" />
          <StatusBar style="dark" />
        </Stack> 
      </GestureHandlerRootView>
    </AuthProvider>
  );
}