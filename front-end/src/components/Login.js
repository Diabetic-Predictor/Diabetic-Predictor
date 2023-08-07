// Login.js
import React, { useState } from "react";
import { login } from "../api/api";
import '../styles/login.css'
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory

const Login = () => {
  const navigate = useNavigate(); // Use useNavigate hook for programmatic navigation
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await login(formData);
      console.log("Login Successful:", response);
      localStorage.setItem("token", response.token);
      navigate("/home"); // Use navigate function instead of history.push

      // Save authentication token or user data in localStorage
    } catch (error) {
      console.error("Login Error:", error.message);
    }
  };

  return (
    <div class="center">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} method="post">
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
        <div class="pass">Forgot Password?</div>
        <input type="submit" value="Login" />
        {/* <button type="submit">Login</button> */}
        <div class="signup_link">
          Not a member? <a href="/signup">Signup</a>
        </div>
      </form>
    </div>
  );
};   
  
export default Login;  
