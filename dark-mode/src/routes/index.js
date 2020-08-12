import App from "./App";
import { ModeContext } from "../contexts/ModeContext";
// Use something like react-router-dom to manage multiple pages/routes
import React, { useState } from "react";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  darkMode
    ? document.documentElement.setAttribute("class", "dark-mode")
    : document.documentElement.removeAttribute("class");

  return (
    <ModeContext.Provider value={[darkMode, setDarkMode]}>
      <App />
    </ModeContext.Provider>
  );
};

export default Home;
