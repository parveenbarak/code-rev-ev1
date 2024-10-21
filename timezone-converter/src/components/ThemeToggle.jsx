import React from "react";

const ThemeToggle = ({ toggleDarkMode, darkMode }) => {
  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeToggle;
