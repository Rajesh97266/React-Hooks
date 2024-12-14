import React, { useState } from "react";

function App() {
  const [settings, setSettings] = useState({
    theme: "light",
    fontSize: 16,
  });
  const [age, setAge] = useState(20);

  const toggleTheme = () => {
    setSettings((prev) => ({
      ...prev,
      theme: prev.theme === "dark" ? "light" : "dark",
    }));
  };

  const IncreaseFontSize = () => {
    setSettings((prev) => ({
      ...prev,
      fontSize: prev.fontSize + 2,
    }));
  };

  const increaseAge = () => {
    setAge((prev) => prev + 1);
  };

  return (
    <>
      <h2>Theme:{settings.theme}</h2>
      <h3>Font Size:{settings.fontSize}px</h3>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={IncreaseFontSize}>Increase Font Size</button>
      <button onClick={increaseAge}>{age}</button>
    </>
  );
}

export default App;
