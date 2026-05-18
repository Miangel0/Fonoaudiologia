import { useFonts } from 'expo-font';
import {
  Stack,
  useRouter,
  useSegments,
  useRootNavigationState,
} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AuthProvider, { useAuth } from '@/providers/AuthProvider';

SplashScreen.preventAutoHideAsync();

function RootLayoutNav() {
  const { loading, session } = useAuth();
  const segments = useSegments();
  const navigationState = useRootNavigationState();
  const router = useRouter();
  const [fontsLoaded, fontError] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const navigatorReady = navigationState?.key != null;
  const ready = (fontsLoaded || fontError) && !loading && navigatorReady;

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  useEffect(() => {
    if (!ready) return;

    const inAuthGroup = segments[0] === '(auth)';
    const inTabsGroup = segments[0] === '(tabs)';

    if (session && (inAuthGroup || !inTabsGroup)) {
      router.replace('/(tabs)');
    } else if (!session && !inAuthGroup) {
      router.replace('/signin');
    }
  }, [ready, session, segments, router]);

  return <Stack screenOptions={{ headerShown: false }} />;
}

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <StatusBar style="dark" />
          <RootLayoutNav />
        </GestureHandlerRootView>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
