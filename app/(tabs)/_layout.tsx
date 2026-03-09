import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors } from '@/constants/Colors';

export default function TabsLayout() {
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.tint,
        tabBarInactiveTintColor: colors.tabIconDefault,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="fonoaudiologia"
        options={{
          title: 'Fonoaudiología',
          tabBarIcon: ({ color }) => (
            <Ionicons name="mic" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="lactancia"
        options={{
          title: 'Lactancia',
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="posiciones"
        options={{
          title: 'Posiciones',
          tabBarIcon: ({ color }) => (
            <Ionicons name="body" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="padre"
        options={{
          title: 'Padre',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="podcast"
        options={{
          title: 'Podcast',
          tabBarIcon: ({ color }) => (
            <Ionicons name="headset" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="universitarias"
        options={{
          title: 'Universitarias',
          tabBarIcon: ({ color }) => (
            <Ionicons name="school" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
