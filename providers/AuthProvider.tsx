import React, { createContext, useState, useEffect, useContext } from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthData = {
  loading: boolean;
  session: Session | null;
  user: Session['user'] | null;
};

const AuthContext = createContext<AuthData>({
  loading: true,
  session: null,
  user: null,
});

interface Props {
  children: React.ReactNode;
}

function isCorruptedSessionError(error: unknown): boolean {
  if (!error) return false;

  const message =
    error instanceof Error
      ? error.message
      : typeof error === 'object' && error !== null && 'message' in error
        ? String((error as { message: unknown }).message)
        : String(error);

  const normalized = message.toLowerCase();
  return (
    normalized.includes('invalid') ||
    normalized.includes('json') ||
    normalized.includes('parse') ||
    normalized.includes('jwt') ||
    normalized.includes('malformed') ||
    normalized.includes('unexpected token')
  );
}

async function clearCorruptedSupabaseSession() {
  try {
    const allKeys = await AsyncStorage.getAllKeys();
    const sbAuthKeys = allKeys.filter((key) => key.includes('-auth-token'));
    if (sbAuthKeys.length > 0) {
      await AsyncStorage.multiRemove(sbAuthKeys);
    }
  } catch (storageError) {
    console.error('Error clearing corrupted auth storage:', storageError);
  }
}

export default function AuthProvider(props: Props) {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<Session['user'] | null>(null);

  useEffect(() => {
    async function fetchSession() {
      if (!isSupabaseConfigured) {
        setSession(null);
        setUser(null);
        setLoading(false);
        return;
      }

      try {
        const { error, data } = await supabase.auth.getSession();
        if (error) throw error;

        setSession(data.session);
        setUser(data.session?.user ?? null);
      } catch (error) {
        console.error('Error fetching session:', error);

        if (isCorruptedSessionError(error)) {
          await clearCorruptedSupabaseSession();
          try {
            const { error: retryError, data: retryData } =
              await supabase.auth.getSession();
            if (retryError) throw retryError;
            setSession(retryData.session ?? null);
            setUser(retryData.session?.user ?? null);
          } catch (retryError) {
            console.error(
              'Error fetching session after storage cleanup:',
              retryError
            );
            setSession(null);
            setUser(null);
          }
        } else {
          setSession(null);
          setUser(null);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchSession();

    if (!isSupabaseConfigured) {
      return;
    }

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, newSession) => {
        setSession(newSession);
        setUser(newSession?.user ?? null);
        setLoading(false);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ loading, session, user }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de AuthProvider');
  }
  return context;
};
