import { useState, useEffect, createContext,useRef } from "react";
export const ThemeContext = createContext();
const getDefaultTheme = () => {
  const savedTheme = sessionStorage.getItem("theme");
  if (savedTheme) return savedTheme;

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getDefaultTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    sessionStorage.setItem("theme", theme);
    toggleTheme(theme);
  }, [theme]);

  const toggleTheme = (name) => {
    setTheme(name);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
