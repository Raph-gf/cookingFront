import axios from "axios";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);

  const login = async (email, password) => {
    try {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken);
      console.log(storedToken);

      const response = await axios.post(
        "http://localhost:4567/users/login",
        { email, password },
        {
          headers: { Authorization: "Bearer " + storedToken },
        }
      );

      const userConnexion = response.data;
      setUser(userConnexion);
      setToken(storedToken);
      console.log(userConnexion);

      setCredentials({ email: "", password: "" });
      notify("Connexion réussie"); // Notification pour une connexion réussie

      navigate("/");
    } catch (error) {
      console.error(error);
      notify("Erreur de connexion");
    }
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth doit être gérer avec un AuthProvider");
  }
  return context;
};
