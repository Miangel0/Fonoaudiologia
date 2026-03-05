import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import AuthProvider from '@/providers/AuthProvider';

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
        <Stack
          screenOptions={{
            headerShown: false,   // 👈 OCULTA EL HEADER PARA TODAS LAS PANTALLAS
          }}
        >
          <Stack.Screen name="(tabs)/index" />
          <Stack.Screen 
            name="(auth)/signin/index" 
            options={{ animation: "ios_from_right", gestureEnabled:false }} 
          />
          <Stack.Screen 
            name="(auth)/signup/index" 
            options={{ animation: "ios_from_right", gestureEnabled:false }} 
          />
          <Stack.Screen name="+not-found" />
          <StatusBar style="dark" />
        </Stack>
      </GestureHandlerRootView>
    </AuthProvider>
  );
}
