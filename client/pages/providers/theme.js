import { createContext, useState } from "react";

export const ThemeContext = createContext("");
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [isLight, setIsLight] = useState(true);

  function setLightTheme() {
    setTheme("light");
    setIsLight(true);
  }

  function setDarkTheme() {
    setTheme("dark");
    setIsLight(false);
  }

  return (
    <ThemeContext.Provider
      value={{ theme, setLightTheme, setDarkTheme, isLight }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
