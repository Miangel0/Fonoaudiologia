import React, { createContext, useState, useEffect, useContext} from "react";
import { Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

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
                setSession(null);
                setUser(null);
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