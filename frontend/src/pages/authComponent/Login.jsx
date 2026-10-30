import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        "https://online-learning-platform-application.onrender.com/api/auth/login",
        loginData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data && response.data.data) {
        toast.success("Login Successful");

        localStorage.setItem(
          "userDetails",
          JSON.stringify(response.data.data)
        );

        localStorage.setItem("isLoggedIn", "true");

        setEmail("");
        setPassword("");

        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        toast.error(response.data.message || "Invalid credentials");
      }
    } catch (err) {
      console.error("Login Error:", err);
      toast.error(
        err.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <ToastContainer />

      <fieldset>
        <legend>Login</legend>

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Enter Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Enter Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="button-container">
          <button type="submit">Submit</button>

          <button
            type="reset"
            onClick={() => {
              setEmail("");
              setPassword("");
            }}
          >
            Reset
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default Login;