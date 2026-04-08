import React, { createContext, useState, useEffect, useContext} from "react";
import { Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthData = {
    loading: boolean;
    session: Session | null;
    user: any;
};

const AuthContext = createContext<AuthData>({
    loading: true,
    session: null,
    user: null,
});

interface Props {
    children: React.ReactNode;
}

export default function AuthProvider(props: Props){
    const [loading, setLoading] = useState(true);
    const [session, setSession] = useState<Session | null>(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function clearCorruptedSupabaseSession() {
            try {
                const allKeys = await AsyncStorage.getAllKeys();
                const sbAuthKeys = allKeys.filter((key) => key.includes("-auth-token"));
                if (sbAuthKeys.length > 0) {
                    await AsyncStorage.multiRemove(sbAuthKeys);
                }
            } catch (storageError) {
                console.error("Error clearing corrupted auth storage:", storageError);
            }
        }

        async function fetchSession(){
            try {
                const { error, data } = await supabase.auth.getSession();
                if(error) throw error;
                
                if(data.session){
                    setSession(data.session);
                    setUser(data.session.user);
                } else {
                    setSession(null);
                    setUser(null);
                }
            } catch (error) {
                console.error('Error fetching session:', error);
                await clearCorruptedSupabaseSession();
                try {
                    // Retry once after removing potentially corrupted persisted auth data.
                    const { error: retryError, data: retryData } = await supabase.auth.getSession();
                    if (retryError) throw retryError;
                    setSession(retryData.session ?? null);
                    setUser(retryData.session?.user ?? null);
                } catch (retryError) {
                    console.error("Error fetching session after storage cleanup:", retryError);
                    setSession(null);
                    setUser(null);
                }
            } finally {
                setLoading(false);
            }
        }
        
        fetchSession();

        // Escuchar cambios de autenticación
        const { data: authListener } = supabase.auth.onAuthStateChange((_, newSession) => {
            setSession(newSession);
            setUser(newSession?.user || null);
            setLoading(false);
        }); 
        
        return () => {
            authListener?.subscription.unsubscribe();
        }
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