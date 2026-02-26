import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    console.log("func init", [e.target.name]);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setFormData({
      username: "",
      fullName: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          placeholder="Enter username here"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="text"
          name="fullName"
          placeholder="Enter Fullname here"
          value={formData.fullName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Enter email here"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter password here"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default App;
