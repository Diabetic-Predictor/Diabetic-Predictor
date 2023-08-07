const express = require('express'); 
const appService = require('../Service/appService')
g
const predict = async (req, res) => {
  const patientData = req.body;

  patientData.age = parseInt(patientData.age, 10);
  patientData.bmi = parseFloat(patientData.bmi);
  patientData.HbA1c_level = parseFloat(patientData.HbA1c_level);
  patientData.blood_glucose_level = parseFloat(patientData.blood_glucose_level);
  const doctorId = req.user.userId;

  patientData.doctorId = doctorId;
  // Call the function and handle the response
  try {
    const prediction = await appService.callPythonService(patientData);
    console.log("Python Service Response:", prediction);

    // Update the patientData with prediction results
    patientData.prediction = prediction.prediction;
    patientData.precentage = prediction.precentage;

    // Save patient data
    const patient = await appService.createPatient(patientData);

    res.status(200).json({
      'prediction': patient.prediction,
      'precentage': patient.precentage,
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "An error occurred" });
  }
};


const getAllPatients = async (req, res) => {

  const doctorId = req.user.userId;
  const patients = await appService.getAllPatientsOfDoctor(doctorId);
  res.status(200).json(patients);
};

module.exports = {
    predict,
    getAllPatients
}