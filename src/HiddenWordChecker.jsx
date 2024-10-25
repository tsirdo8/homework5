import React, { useState, useEffect } from "react";
import "./HiddenWordChecker.css";

const HiddenWordChecker = () => {
  const hiddenWord = "secret";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const handleKeyPress = (event) => {
      setTypedText((prev) => prev + event.key);
    };

    window.addEventListener("keypress", handleKeyPress);
    return () => window.removeEventListener("keypress", handleKeyPress);
  }, []);

  return (
    <div className="hidden-word-container">
      <h2>Type to find the hidden word!</h2>
      {typedText.includes(hiddenWord) && <p>Hidden word found: {hiddenWord}</p>}
    </div>
  );
};

export default HiddenWordChecker;
