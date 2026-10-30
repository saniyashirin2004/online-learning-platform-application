import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

// const Login = () => {

//   let [email, setEmail] = useState('');
//   let [password, sePassword] = useState('');
//   let navigate = useNavigate();

//   let handleEmail = (e) => {
//     setEmail(e.target.value)
//   }
//   let handlePassword = (e) => {
//     sePassword(e.target.value)
//   }

//   let handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted")

//     axios.get(`http://localhost:8080/register?email=${email}&password=${password}`)
//       .then((res) => {
//         console.log(res.data);
//         if (res.data.length > 0) {
//           toast.success("Login Successfull")
//           localStorage.setItem("userDegtails", JSON.stringify(res.data));
//           localStorage.setItem("isLoggedIn", "true")

//           localStorage.setItem('token',res.data)
//           setEmail("");
//           sePassword("");
//           setTimeout(() => {
//             navigate('/');
//           }, 2000)

//         } else {
//           toast.error("Invaild User Details")
//         }
//       })
//   }

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
        "/api/auth/login",
        loginData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      toast.success("Login Successful");

      // assuming backend returns user + token
      localStorage.setItem("userDetails", JSON.stringify(response.data.data));
      // localStorage.setItem("token", response.data.token);
      localStorage.setItem("isLoggedIn", "true");

      setEmail("");
      setPassword("");

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid credentials");
    }
  };
  return (
    //  <form onSubmit={handleSubmit} className='register-form'>
    //             <ToastContainer />
    //             <fieldset>
    //                 <legend>Login</legend>

    //                 <label htmlFor="email">Email:</label>
    //                 <input type="email" id='email' placeholder='Enter Email' name='email' onChange={handleEmail} />

    //                 <label htmlFor="password">Password:</label>
    //                 <input type="password" id='password' placeholder='Enter Password' name='password' onChange={handlePassword} />

    //                 <div className="button-container">
    //                     <button type="submit">Submit</button>
    //                     <button type="reset" onClick={() => setUserData({ username: "", phone: "", email: "", password: "", age: "" })}>Reset</button>
    //                 </div>

    //             </fieldset>
    //         </form>

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
