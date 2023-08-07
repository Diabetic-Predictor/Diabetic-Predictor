import React from "react";
import "../styles/patientCard.css"; // Import the CSS file for patient card styles

const PatientCard = ({ patientData }) => {
  return (
    <div className="patient-card">
      <h3 className="patient-name">{patientData.name}</h3>
      <div className="patient-details">
        <div className="detail-item">
          <span>Gender:</span> {patientData.gender}
        </div>
        <div className="detail-item">
          <span>Age:</span> {patientData.age}
        </div>
        <div className="detail-item">
          <span>Hypertension:</span> {patientData.hypertension ? "Yes" : "No"}
        </div>
        <div className="detail-item">
          <span>Heart Disease:</span> {patientData.heart_disease ? "Yes" : "No"}
        </div>
        <div className="detail-item">
          <span>Smoking History:</span> {patientData.smoking_history}
        </div>
        <div className="detail-item">
          <span>BMI:</span> {patientData.bmi}
        </div>
        <div className="detail-item">
          <span>HbA1c Level:</span> {patientData.HbA1c_level}
        </div>
        <div className="detail-item">
          <span>Blood Glucose Level:</span> {patientData.blood_glucose_level}
        </div>
        <div className="detail-item">
          <span>Age Category:</span> {patientData.AgeCat}
        </div>
        <div className="detail-item">
          <span>Status:</span> {patientData.BMICat}
        </div>
        <div className="detail-item">
          <span>percentage:</span> {patientData.GlucoseCat}
        </div>
      </div>
    </div>
  );
};

export default PatientCard;
