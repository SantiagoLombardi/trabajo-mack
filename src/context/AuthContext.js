import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Crea el contexto de autenticación
export const AuthContext = createContext();

// Hook personalizado para usar el contexto de autenticación
export const useAuth = () => useContext(AuthContext);

// Proveedor de autenticación
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Almacenar datos de autenticación en LocalStorage
  useEffect(() => {
    const storedAuth = localStorage.getItem('auth');
    if (storedAuth) {
      setIsAuthenticated(JSON.parse(storedAuth));
    }
  }, []);

  // Función para iniciar sesión con Google
  const loginWithGoogle = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setIsAuthenticated(true);
      localStorage.setItem('auth', JSON.stringify(true));
      return result;
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
      throw error;
    }
  };

  // Función para cerrar sesión
  const logout = () => {
    // Aquí puedes implementar el cierre de sesión con Firebase
    setIsAuthenticated(false);
    localStorage.removeItem('auth');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
