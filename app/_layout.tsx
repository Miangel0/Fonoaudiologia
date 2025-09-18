// app/_layout.tsx
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import Colors from "@/constants/Colors";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" backgroundColor={Colors.primary} />
      <Stack
        screenOptions={{
          headerShown: false,   // 👈 Oculta el header de expo-router
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="lactancia" />
        <Stack.Screen name="posiciones" />
        <Stack.Screen name="padre" />
        <Stack.Screen name="podcast" />
        <Stack.Screen name="universitarias" />
        <Stack.Screen name="fonoaudiologia" />
      </Stack>
    </>
  );
}
