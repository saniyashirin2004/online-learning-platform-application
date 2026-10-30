import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://online-learning-platform-application.onrender.com/api/auth/register",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data) {
        toast.success("User Registered Successfully!");

        setUserData({
          username: "",
          phone: "",
          email: "",
          password: "",
          age: "",
        });

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      console.error("Registration Error:", error);

      toast.error(
        error.response?.data?.message ||
          "Registration failed. Please try again."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <ToastContainer />

      <fieldset>
        <legend>Signup</legend>

        <label htmlFor="un">Username:</label>
        <input
          type="text"
          id="un"
          placeholder="Enter Username"
          name="username"
          value={userData.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          placeholder="Enter Phone"
          name="phone"
          value={userData.phone}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Enter Email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Enter Password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          placeholder="Enter Age"
          name="age"
          min={20}
          value={userData.age}
          onChange={handleChange}
          required
        />

        <div className="spacer"></div>

        <div className="button-container">
          <button type="submit">Submit</button>

          <button
            type="reset"
            onClick={() =>
              setUserData({
                username: "",
                phone: "",
                email: "",
                password: "",
                age: "",
              })
            }
          >
            Reset
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default Register;