import React, { createContext, useContext, useMemo, useState } from 'react';

export type AuthUser = {
  name: string;
  email: string;
};

export type AuthContextValue = {
  isAuthenticated: boolean;
  user: AuthUser | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(false);

  async function signIn(email: string, password: string) {
    setLoading(true);
    // Mock delay to simulate network
    await new Promise((r) => setTimeout(r, 400));
    // Mock: accept any credentials that are non-empty
    if (!email || !password) {
      setLoading(false);
      throw new Error('Please enter email and password');
    }
    setUser({ name: email.split('@')[0] || 'Parent', email });
    setLoading(false);
  }

  async function signUp(name: string, email: string, password: string) {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 500));
    if (!name || !email || !password) {
      setLoading(false);
      throw new Error('Please complete all fields');
    }
    setUser({ name, email });
    setLoading(false);
  }

  async function signOut() {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 200));
    setUser(null);
    setLoading(false);
  }

  const value = useMemo<AuthContextValue>(() => ({
    isAuthenticated: Boolean(user),
    user,
    loading,
    signIn,
    signUp,
    signOut,
  }), [user, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider');
  return ctx;
} 