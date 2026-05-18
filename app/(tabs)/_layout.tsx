import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Platform, useWindowDimensions } from 'react-native';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors } from '@/constants/Colors';

export default function TabsLayout() {
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;
  const labelSize = isTablet ? 11 : 12;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.tint,
        tabBarInactiveTintColor: colors.tabIconDefault,
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: labelSize,
        },
        tabBarStyle: {
          paddingBottom: Platform.OS === 'ios' ? 4 : 0,
          minHeight: isTablet ? 56 : 49,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={isTablet ? 24 : 28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="fonoaudiologia"
        options={{
          title: 'Fonoaudiología',
          tabBarIcon: ({ color }) => (
            <Ionicons name="mic" size={isTablet ? 24 : 28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="lactancia"
        options={{
          title: 'Lactancia',
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart" size={isTablet ? 24 : 28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="posiciones"
        options={{
          title: 'Posiciones',
          tabBarIcon: ({ color }) => (
            <Ionicons name="body" size={isTablet ? 24 : 28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="padre"
        options={{
          title: 'Padre',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={isTablet ? 24 : 28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="podcast"
        options={{
          title: 'Podcast',
          tabBarIcon: ({ color }) => (
            <Ionicons name="headset" size={isTablet ? 24 : 28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="universitarias"
        options={{
          title: 'Universitarias',
          tabBarIcon: ({ color }) => (
            <Ionicons name="school" size={isTablet ? 24 : 28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
