import React, { useState, useEffect } from "react";
import { getAllPatients } from "../api/api";
import PatientCard from "./PatientCard"; // Import the PatientCard component
import "../styles/history.css"; // Import the CSS file for styling

const ViewAllPatients = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetchAllPatients();
            // setPatients(fakePatientData);
  }, []);

  const fetchAllPatients = async () => {
    try {
      const response = await getAllPatients();
      setPatients(response);
      // setPatients(fakePatientData);
    } catch (error) {
      console.error("Failed to fetch patient history:", error.message);
    }
  };

//     const renderPatientCards = () => {
//         return 
//   };

  return (
    <div className="container">
      <div className="header">
        <h2 className="title">View All Patients</h2>
          </div>
          
      <div className="grid-container">
        {patients.map((patient, index) => (
          <PatientCard key={index} patientData={patient} />
        ))}
        ;{/* {renderPatientCards()} Render multiple PatientCard components */}
      </div>
    </div>
  );
};

export default ViewAllPatients;
