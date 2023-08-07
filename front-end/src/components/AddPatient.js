import React, { useState } from "react";
import { addPatient } from "../api/api";
import "../styles/addPatient.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import PredictionPopup from "./PredictionPopup"; // Import PredictionPopup component

const AddPatient = ({ onCloseSidebar }) => {
  const [showPredictionPopup, setShowPredictionPopup] = useState(false);
    const [PredictionResult, setPredictionResult] = useState();

  const handleClosePredictionPopup = () => {
    setShowPredictionPopup(false);
    navigate("/home");
  };

  const navigate = useNavigate(); // Use useNavigate hook for programmatic navigation
  const [patientData, setPatientData] = useState({
    name: "",
    gender: "",
    age: 0,
    hypertension: false,
    heart_disease: false,
    smoking_history: "",
    bmi: 0,
    HbA1c_level: 0,
    blood_glucose_level: 0,
    diagnosis: "",
    doctorId: 0,
    prediction:false,
    precentage:0.0
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPatientData({ ...patientData, [name]: value });
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await addPatient(patientData);
      
      console.log("Patient added:", response);

      const { prediction, precentage } = response;
      setPredictionResult({ prediction, precentage });
      setShowPredictionPopup(true);
    } catch (error) {
      console.error("Add Patient Error:", error.message);
    }
  };

  const handleSidebarClose = () => {
    onCloseSidebar();
  };

  return (
    <div className="container">
      <button className="close-button" onClick={handleSidebarClose}>
        X
      </button>
      <div className="add-patient">
        <h2 className="heading">Add Patient</h2>
        <p>Add a new patient and predict his diabetic </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={patientData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <input
            type="text"
            name="gender"
            value={patientData.gender}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={patientData.age}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Hypertension</label>
          <input
            type="checkbox"
            name="hypertension"
            checked={patientData.hypertension}
            onChange={(e) =>
              setPatientData({
                ...patientData,
                hypertension: e.target.checked,
              })
            }
          />
        </div>
        <div className="form-group">
          <label>Heart Disease</label>
          <input
            type="checkbox"
            name="heart_disease"
            checked={patientData.heart_disease}
            onChange={(e) =>
              setPatientData({
                ...patientData,
                heart_disease: e.target.checked,
              })
            }
          />
        </div>
        <div className="form-group">
          <label>Smoking History</label>
          <input
            type="text"
            name="smoking_history"
            value={patientData.smoking_history}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>BMI</label>
          <input
            type="number"
            name="bmi"
            value={patientData.bmi}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>HbA1c Level</label>
          <input
            type="number"
            name="HbA1c_level"
            value={patientData.HbA1c_level}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Blood Glucose Level</label>
          <input
            type="number"
            name="blood_glucose_level"
            value={patientData.blood_glucose_level}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Diagnosis</label>
          <input
            type="text"
            name="diagnosis"
            value={patientData.diagnosis}
            onChange={handleInputChange}
          />
        </div>

        <button className="addButton" type="submit">
          Predict
        </button>
        {/* <input type="submit" value=" Add Patient"c /> */}
      </form>

      {showPredictionPopup && (
        <PredictionPopup
          prediction={PredictionResult.prediction}
          percentage={PredictionResult.precentage}
          onClose={handleClosePredictionPopup}
        />
      )}
    </div>
  );
};

export default AddPatient;
