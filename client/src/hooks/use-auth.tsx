import { createContext, ReactNode, useContext } from "react";
import {
  useQuery,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { insertUserSchema, User, InsertUser } from "@shared/schema";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  error: Error | null;
  loginMutation: UseMutationResult<User, Error, LoginData>;
  logoutMutation: UseMutationResult<void, Error, void>;
  registerMutation: UseMutationResult<User, Error, InsertUser>;
};

type LoginData = Pick<InsertUser, "email" | "password">;

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const { toast } = useToast();
  const {
    data: user,
    error,
    isLoading,
  } = useQuery<User | null, Error>({
    queryKey: ["user"],
    queryFn: async () => {
      try {
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError) {
          if (sessionError.message?.includes('refresh_token_not_found')) {
            await supabase.auth.signOut();
            queryClient.setQueryData(["user"], null);
            window.location.href = "/auth";
            return null;
          }
          throw sessionError;
        }
        
        if (!session) {
          return null;
        }

        const { data: userData, error: userError } = await supabase
          .from('users')
          .select('*')
          .eq('id', session.user.id)
          .single();

        if (userError) {
          console.error("Error fetching user data:", userError);
          throw new Error(`Failed to fetch user data: ${userError.message}`);
        }

        if (!userData) {
          throw new Error("User data not found");
        }

        return userData;
      } catch (err) {
        console.error("Error in user query:", err);
        if (err instanceof Error && err.message?.includes('refresh_token_not_found')) {
          await supabase.auth.signOut();
          queryClient.setQueryData(["user"], null);
          window.location.href = "/auth";
          return null;
        }
        throw err;
      }
    },
    retry: 1,
    retryDelay: 1000
  });

  const loginMutation = useMutation({
    mutationFn: async (credentials: LoginData) => {
      try {
        const { data: { session }, error: authError } = await supabase.auth.signInWithPassword({
          email: credentials.email,
          password: credentials.password,
        });

        if (authError) throw new Error(authError.message);
        if (!session) throw new Error("No session returned");

        const { data: userData, error: userError } = await supabase
          .from('users')
          .select('*')
          .eq('id', session.user.id)
          .single();

        if (userError) throw new Error(userError.message);
        if (!userData) throw new Error("User profile not found");

        return userData;
      } catch (err) {
        console.error("Login error:", err);
        throw err;
      }
    },
    onSuccess: (user: User) => {
      queryClient.setQueryData(["user"], user);
      toast({
        title: "Giriş Başarılı",
        description: "Hoş geldiniz!",
      });
      window.location.href = "/";
    },
    onError: (error: Error) => {
      console.error("Login mutation error:", error);
      toast({
        title: "Giriş başarısız",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const registerMutation = useMutation({
    mutationFn: async (userData: InsertUser) => {
      try {
        const { data: authData, error: authError } = await supabase.auth.signUp({
          email: userData.email,
          password: userData.password,
          options: {
            data: {
              name: userData.name,
              age: userData.age
            }
          }
        });

        if (authError) throw new Error(authError.message);
        if (!authData.user) throw new Error("No user returned from signup");

        const { data: newUser, error: profileError } = await supabase
          .from('users')
          .insert([
            {
              id: authData.user.id,
              email: userData.email,
              name: userData.name,
              age: userData.age
            }
          ])
          .select()
          .single();

        if (profileError) {
          await supabase.auth.signOut();
          throw new Error("Failed to create user profile");
        }

        return newUser;
      } catch (err) {
        console.error("Registration error:", err);
        throw err;
      }
    },
    onSuccess: (user: User) => {
      queryClient.setQueryData(["user"], user);
      toast({
        title: "Kayıt Başarılı",
        description: "Hesabınız oluşturuldu!",
      });
      window.location.href = "/";
    },
    onError: (error: Error) => {
      console.error("Registration mutation error:", error);
      toast({
        title: "Kayıt başarısız",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      try {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
      } catch (err) {
        console.error("Logout error:", err);
        throw err;
      }
    },
    onSuccess: () => {
      queryClient.setQueryData(["user"], null);
      toast({
        title: "Çıkış Yapıldı",
        description: "Başarıyla çıkış yaptınız",
      });
      window.location.href = "/auth";
    },
    onError: (error: Error) => {
      console.error("Logout mutation error:", error);
      queryClient.setQueryData(["user"], null);
      window.location.href = "/auth";
      toast({
        title: "Çıkış başarısız",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  return (
    <AuthContext.Provider
      value={{
        user: user || null,
        isLoading,
        error,
        loginMutation,
        logoutMutation,
        registerMutation,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}