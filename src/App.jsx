import React, { useState, useEffect } from "react";
import HiddenWordChecker from "./HiddenWordChecker";
import Timer from "./Timer";
import "./App.css";

const App = () => {
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouseCoords({ x: event.clientX, y: event.clientY });
      console.log(
        `Mouse coordinates: X = ${event.clientX}, Y = ${event.clientY}`
      );
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="app-container">
      <HiddenWordChecker />
      <Timer />
      <p>
        Mouse Position - X: {mouseCoords.x}, Y: {mouseCoords.y}
      </p>
    </div>
  );
};

export default App;
