// hooks/useAuth.ts
import { useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';

interface User {
  id: string;
  email: string;
  nombre: string;
  edad?: number;
  ciudad?: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean;
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
    isLoading: true,
  });

  // Verificar si hay sesión guardada
  useEffect(() => {
    checkAuthState();
  }, []);

  const checkAuthState = async () => {
    try {
      const token = await SecureStore.getItemAsync('userToken');
      const userData = await SecureStore.getItemAsync('userData');
      
      if (token && userData) {
        setAuthState({
          isAuthenticated: true,
          user: JSON.parse(userData),
          isLoading: false,
        });
      } else {
        setAuthState({
          isAuthenticated: false,
          user: null,
          isLoading: false,
        });
      }
    } catch (error) {
      console.error('Error checking auth state:', error);
      setAuthState({
        isAuthenticated: false,
        user: null,
        isLoading: false,
      });
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      // Aquí harías la llamada a tu API
      // Por ahora simulamos el login
      const mockUser: User = {
        id: '1',
        email: email,
        nombre: 'Usuario Test',
      };

      // Guardar datos de sesión
      await SecureStore.setItemAsync('userToken', 'mock-token');
      await SecureStore.setItemAsync('userData', JSON.stringify(mockUser));

      setAuthState({
        isAuthenticated: true,
        user: mockUser,
        isLoading: false,
      });

      return { success: true };
    } catch (error) {
      console.error('Sign in error:', error);
      return { success: false, error: 'Error al iniciar sesión' };
    }
  };

  const signUp = async (userData: {
    nombre: string;
    email: string;
    password: string;
    edad: number;
    ciudad: string;
    estadoCivil: string;
    numeroHijos: number;
    ocupacion: string;
  }) => {
    try {
      // Aquí harías la llamada a tu API para registrar
      const newUser: User = {
        id: Date.now().toString(),
        email: userData.email,
        nombre: userData.nombre,
        edad: userData.edad,
        ciudad: userData.ciudad,
      };

      // Guardar datos de sesión
      await SecureStore.setItemAsync('userToken', 'mock-token');
      await SecureStore.setItemAsync('userData', JSON.stringify(newUser));

      setAuthState({
        isAuthenticated: true,
        user: newUser,
        isLoading: false,
      });

      return { success: true };
    } catch (error) {
      console.error('Sign up error:', error);
      return { success: false, error: 'Error al registrar usuario' };
    }
  };

  const signOut = async () => {
    try {
      await SecureStore.deleteItemAsync('userToken');
      await SecureStore.deleteItemAsync('userData');
      
      setAuthState({
        isAuthenticated: false,
        user: null,
        isLoading: false,
      });
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  return {
    ...authState,
    signIn,
    signUp,
    signOut,
  };
};