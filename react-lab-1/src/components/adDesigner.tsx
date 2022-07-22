import { useState } from "react";
import "./adDesigner.css";

function AdDesigner() {
  const [buttonValue, setButtonValue] = useState("Rocky Road");

  const handleAdButton = () => {
    if (buttonValue === "Rocky Road") {
      setButtonValue("Rocky Road");
    } else if (buttonValue === "Americone Dream") {
      setButtonValue("Americone Dream");
    } else {
      setButtonValue("Superman");
    }
  };

  return (
    <div>
      <div className="card-container">
        <h3>Vote for</h3>
        <h2>{buttonValue}</h2>
      </div>
      <div className="button-container">
        <button onClick={handleAdButton}>Rocky Road</button>
        <button onClick={handleAdButton}>Americone Dream</button>
        <button onClick={handleAdButton}>Superman</button>
      </div>
    </div>
  );
}

export default AdDesigner;
