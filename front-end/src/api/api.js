// api.js
import axios from "axios";

const BASE_URL = "http://localhost:3001"; // Replace this with your backend URL

export const login = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, userData);
    const token = response.data.token;
    // Assuming the token is returned in the response as 'token'
    console.log("token : " + token)
    if (token) {
        sessionStorage.setItem("token", token);
    }
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
};

export const signup = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Signup failed");
  }
};


export const addPatient = async (patientData) => {
  try {
    //  let headers = {};
    //  if (sessionStorage.getItem("token")) {
    //    headers = { authorization: sessionStorage.getItem("token") };
    //  }
    const response = await axios.post(`${BASE_URL}/predict`, patientData, {
      headers: {
        "Content-Type": "application/json",
        'authorization': sessionStorage.getItem("token"),
      },
    });  
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to add patient");
  }
};

export const getAllPatients = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/getAllPatients`, {
      headers: {
        "Content-Type": "application/json",
        authorization: sessionStorage.getItem("token"),
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch patient history"
    );
  }
};
