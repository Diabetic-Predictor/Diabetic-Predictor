import React, { useEffect } from "react";
import "../styles/predictionPopup.css";
import { useNavigate  } from "react-router-dom"; // Import useNavigate hook
import { useState } from "react";


const PredictionPopup = ({ prediction, percentage, onClose }) => {
  const navigate = useNavigate(); // Use useNavigate hook for programmatic navigation
    const [countdown, setCountdown] = useState(10);
  // Close the popup after 10 seconds
    useEffect(() => {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
      return () => clearInterval(timer);
    }, []);

  
  useEffect(() => {
    if (countdown === 0) {
      onClose();
    }
  }, [countdown, onClose]);

 const handlePopupClose = () => {
   navigate("/home"); // Navigate to "/home" when the user closes the popup
 };
  return (
    <div className="popup-container">
      <div className="popup-content">
        <div className="countdown-timer">
          <span>{countdown}</span>
        </div>
        <span>{prediction ? "Positive" : "Negative"}</span>
        <div className="prediction-circle">
          <div className="percentage-circle">
            <span>{percentage.toFixed(2)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictionPopup;
