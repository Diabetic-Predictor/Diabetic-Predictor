// Signup.js
import React, { useState } from "react";
import { signup } from "../api/api";
import "../styles/signup.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory

const Signup = () => {
  
    const navigate = useNavigate(); // Use useNavigate hook for programmatic navigation  
    
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Check if any of the required fields are empty
    if (!formData.name || !formData.email || !formData.password) {
      console.error("Please fill in all required fields.");
      return;
    }
      try {

        const response = await signup(formData);
        console.log("Signup Successful:", response);
        // Save authentication token or user data in localStorage
        navigate("/"); // Use navigate function instead of history.push
      } catch (error) {
      console.error("Signup Error:", error.message);
    }
  };

  return (
    <div class="center">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit} method="post">
        <div class="txt_field">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <span></span>
          <label>Name</label>
        </div>
        <div class="txt_field">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <span></span>
          <label>Email</label>
        </div>
        <div class="txt_field">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          /> 
          <span></span>
          <label>Password</label>
        </div>
        <input type="submit" value="Signup" />
      </form>
    </div>
  );
};
export default Signup;
