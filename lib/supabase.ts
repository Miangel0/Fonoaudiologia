import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';
import { createClient } from '@supabase/supabase-js';

function cleanEnv(value: string | undefined): string {
  if (!value) return '';
  return value.replace(/^["']|["']$/g, '').trim();
}

const extra = Constants.expoConfig?.extra as
  | { supabaseUrl?: string; supabaseAnonKey?: string }
  | undefined;

const supabaseUrl = cleanEnv(
  process.env.EXPO_PUBLIC_SUPABASE_URL ?? extra?.supabaseUrl
);
const supabaseAnonKey = cleanEnv(
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ?? extra?.supabaseAnonKey
);

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

if (!isSupabaseConfigured) {
  console.warn(
    'Missing EXPO_PUBLIC_SUPABASE_URL or EXPO_PUBLIC_SUPABASE_ANON_KEY. ' +
      'Add them to .env and restart with: npx expo start --clear'
  );
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key',
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  }
);
