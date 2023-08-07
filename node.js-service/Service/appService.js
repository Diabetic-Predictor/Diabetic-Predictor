const queries = require("../database/queries");
const axios = require("axios");

async function callPythonService(patientData) {
  const url = "http://localhost:3002/predict";
  try {
    // Make a POST request to the Python service using axios
    const response = await axios.post(url, patientData);
    // Return the response data
    console.log("returned from python service ---");
    console.log(response);

    return response.data;
  } catch (error) {
    console.error("Error calling Python service:", error.message);
    throw error;
  }
}

const createPatient = async (patientData) => {
  const patient = await queries.createPatient(patientData);
    if (patient)
        return patient; // already found
};

const getAllPatientsOfDoctor = async (doctorId) => {
  const patients = await queries.getAllPatientsOfDoctor(doctorId);
    if (patients)
        return patients; // already found
    else return { error: " cannot retrieve all patients " };
}

module.exports = {
  createPatient,
  getAllPatientsOfDoctor,
  callPythonService,
};
