import React, { useEffect, useState } from "react";
import styles from "../component/Counter.module.css";


const Counter = () => {
  const [seconds, setSeconds] = useState(0);
  const [digits, setDigits] = useState([0, 0, 0, 0]);
  const [counterStarted, setCounterStarter] = useState(false);
  
  const startCounter = () => {
    setCounterStarter(true);
    
  };
  
  const resetCounter = () => {
    setCounterStarter(false); 
    setSeconds(0); 
    setDigits([0, 0, 0, 0]);
    
  };

  
 
  useEffect(() => {
    let interval;
    if (counterStarted) {
      interval = setInterval(() => {
        const newSeconds = seconds + 1; 
        const digitArray = newSeconds.toString().padStart(4, "0").split("");

        setDigits(digitArray);
        setSeconds(newSeconds);
    },1000);

    return () => 
      clearInterval(interval);
  }
  }, [counterStarted, seconds]);

  return (
    <div>
      <div className={`box-counter ${styles.box}`}>
        <div className="row">
          <div className={`digit col ${styles.digit}`}>
            <i className="far fa-clock"></i>
          </div>
          <div className={`digit col ${styles.digit}`}>{digits[0]}</div>
          <div className={`digit col ${styles.digit}`}>{digits[1]}</div>
          <div className={`digit col ${styles.digit}`}>{digits[2]}</div>
          <div className={`digit col ${styles.digit}`}>{digits[3]}</div>
        </div>
      </div>
      <div className="center-button">
        <button onClick={startCounter}>Start Terapy</button>
        <button onClick={resetCounter}>Reset Terapy</button>
      </div>
    </div>
  );
};

export default Counter;
