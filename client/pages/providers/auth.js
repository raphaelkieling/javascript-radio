import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase";

export const AuthContext = createContext("");
const ThemeProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      setUser(userAuth);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default ThemeProvider;
