import React from "react";
import { createContext, useContext, useState, useEffect } from "react";
const ThemeContext = createContext();

// export const useThemeContext = useContext(ThemeContext);
export const useThemeContext = () => useContext(ThemeContext);
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    document.body.className  = theme === "dark" ? "dark" : "light";
  }, [theme]);
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
