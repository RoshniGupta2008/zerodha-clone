import React, { useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const { data } = await axios.post(`${API_URL}/auth/login`, formData);
      if (data.success) {
        setSuccess("Login successful! Redirecting...");
        const dashboardUrl = import.meta.env.VITE_DASHBOARD_URL;
        setTimeout(() => {
          window.location.href = `${dashboardUrl}?token=${data.token}`;
        }, 1500);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "5rem auto", padding: "2rem", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h2 style={{ marginBottom: "1.5rem" }}>Login</h2>

      {error && <p style={{ color: "red", marginBottom: "1rem" }}>{error}</p>}
      {success && <p style={{ color: "green", marginBottom: "1rem" }}>{success}</p>}

      <div style={{ marginBottom: "1rem" }}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginTop: "4px", border: "1px solid #ccc", borderRadius: "4px" }}
        />
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginTop: "4px", border: "1px solid #ccc", borderRadius: "4px" }}
        />
      </div>

      <button
        onClick={handleSubmit}
        style={{ width: "100%", padding: "10px", background: "#387ed1", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "16px" }}
      >
        Login
      </button>

      <p style={{ marginTop: "1rem", textAlign: "center" }}>
        Account nahi hai? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
};

export default Login;