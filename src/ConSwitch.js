import React, { useState } from "react";
import "./ConSwitch.css";

function ConditionalSwitch() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  const switchRender = () => {
    switch (theme) {
      case "light":
        return (
          <div className="light-theme">
            <p>Light Theme</p>
            <button onClick={toggleTheme}>Switch </button>
          </div>
        );

      case "dark":
        return (
          <div className="dark-theme">
            <p>Dark Theme</p>
            <button onClick={toggleTheme}>Switch </button>
          </div>
        );

      default:
        return null;
    }
  };
  return <div>{switchRender()}</div>;
}

export default ConditionalSwitch;
