import React, { useState } from "react";
import AddPatient from "./AddPatient";
import ViewAllPatients from "./ViewHistory";
import "../styles/home.css";
const Home = () => {
  const [showAddPatient, setShowAddPatient] = useState(false);
  const [showBrowseHistory, setShowBrowseHistory] = useState(false);

  const handleAddPatientClick = () => {
    setShowAddPatient(true);
    setShowBrowseHistory(false);
  };

  const handleBrowseHistoryClick = () => {
    setShowAddPatient(false);
    setShowBrowseHistory(true);
    };
     const handleCloseSidebar = () => {
       setShowAddPatient(false);
     };

  return (
    <div
      className={`home-container ${showAddPatient ? "blur-background" : ""}`}
    >
      <div className="content-container">
        <div className="image-container">
          <img
            src="/assets/background.jpg"
            alt="Website background"
            className="image-style"
          />
        </div>

        <div className="buttons-container">
          <button onClick={handleAddPatientClick}>Add Patient</button>
          <button onClick={handleBrowseHistoryClick}>Browse History</button>
        </div>

        {showBrowseHistory && (
          <div className="view-patient-history">
            <ViewAllPatients />
          </div>
        )}
        
        {showAddPatient && (
          <div className="add-patient-sidebar">
            <AddPatient onCloseSidebar={handleCloseSidebar} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
