import  { createContext, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div>
        <h1>current theme:{theme}</h1>
        <ThemeSwitcher />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
