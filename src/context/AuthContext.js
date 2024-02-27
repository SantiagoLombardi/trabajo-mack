import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
// saque del import a 'signOut' porque no se usaba
// Crea el contexto de autenticación
export const AuthContext = createContext();

// Hook personalizado para usar el contexto de autenticación
export const useAuth = () => useContext(AuthContext);

// Proveedor de autenticación
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Almacenar datos de autenticación en LocalStorage
  useEffect(() => {
    const storedAuth = localStorage.getItem('auth');
    if (storedAuth) {
      setIsAuthenticated(JSON.parse(storedAuth));
    }
  }, []);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  // Función para iniciar sesión con Google
  const loginWithGoogle = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setIsAuthenticated(true);
      setCurrentUser(result.user);
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
    setCurrentUser(null);
    localStorage.removeItem('auth');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, currentUser, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
