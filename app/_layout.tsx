import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { useColorScheme } from '@/hooks/use-color-scheme';
import React, { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  
  useEffect(() => {
    if (loaded){
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded){
    return null;
  }

  return (
    <GestureHandlerRootView>
      <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen 
        name='(auth)/signin/index' 
        options={{ headerShown: false, animation: 'ios_from_right', gestureEnabled: false }} />
      </Stack>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </GestureHandlerRootView>
  );
}
