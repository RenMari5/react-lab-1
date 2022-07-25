import { useState } from "react";
import "./adDesigner.css";

function AdDesigner() {
  const [buttonValue, setButtonValue] = useState("Rocky Road");
  const [adValue, setAdValue] = useState("Rocky Road");
  const [colorThemeValue, setColorThemeValue] = useState(false);
  const [fontSize, setFontSize] = useState(36);

  const handleAdButton = () => {
    if (buttonValue === "Rocky Road") {
      setButtonValue("Rocky Road");
    } else if (buttonValue === "Americone Dream") {
      setButtonValue("Americone Dream");
    } else {
      setButtonValue("Superman");
    }
  };

  const handleAd = () => {
    if (adValue === "Rocky Road") {
      setAdValue("Rocky Road");
    } else if (adValue === "Americone Dream") {
      setAdValue("Americone Dream");
    } else {
      setAdValue("Superman");
    }
  };

  const incrementFont = () => {
    setFontSize(fontSize + 1);
  };

  const decrementFont = () => {
    setFontSize(fontSize - 1);
  };

  const handleColorTheme = () => {
    setColorThemeValue(true);
  };

  return (
    <div className="create-ad">
      <h1>AdDesigner</h1>
      <div className="card-container">
        <h4>Vote for</h4>
        <h1 style={{ fontSize: `${fontSize}px` }} onClick={handleAd}>
          {buttonValue}
        </h1>
      </div>
      <div className="flavor-button-container">
        <h3>What to Support</h3>
        <button onClick={handleAdButton} className="button-style">
          Rocky Road
        </button>
        <button onClick={handleAdButton} className="button-style">
          Americone Dream
        </button>
        <button onClick={handleAdButton} className="button-style">
          Superman
        </button>
      </div>
      <div className="color-theme-container">
        <h3>Color Theme</h3>
        <button>Light</button>
        <button>Dark</button>
      </div>
      <div className="font-size-container">
        <h3>Font Size</h3>
        <button onClick={decrementFont}>Down</button>
        {fontSize}
        <button onClick={incrementFont}>Up</button>
      </div>
    </div>
  );
}

export default AdDesigner;
