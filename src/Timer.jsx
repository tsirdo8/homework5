import React, { useState, useEffect } from "react";
import "./Timer.css";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (secs) =>
    new Date(secs * 1000).toISOString().substring(11, 19);

  return (
    <div className="timer-container">
      <h1>{formatTime(seconds)}</h1>
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Pause</button>
      <button
        onClick={() => {
          setSeconds(0);
          setIsRunning(false);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Timer;
