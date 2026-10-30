import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Register = () => {
    let navigate = useNavigate();
    let [userData, setUserData] = useState({
        username: "", phone: "", email: "", password: "", age: "",
    });

    let handleChange = (e) => {
        let { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    let handleSubmit = (e) => {
        e.preventDefault();
        axios.post("/api/auth/register", userData)
            .then((res) => {
                toast.success("User Register Successful");
                setTimeout(() => navigate('/login'), 2000);
                setUserData({ username: "", phone: "", email: "", password: "", age: "" });
            });
    };

    return (
        <form onSubmit={handleSubmit} className='register-form'>
            <ToastContainer />
            <fieldset>
                <legend>Signup</legend>
                <label htmlFor="un">Username:</label>
                <input type="text" id='un' placeholder='Enter Username' name='username' value={userData.username} onChange={handleChange} />

                <label htmlFor="phone">Phone:</label>
                <input type="text" id='phone' placeholder='Enter Phone' name='phone' value={userData.phone} onChange={handleChange} />

                <label htmlFor="email">Email:</label>
                <input type="email" id='email' placeholder='Enter Email' name='email' value={userData.email} onChange={handleChange} />

                <label htmlFor="password">Password:</label>
                <input type="password" id='password' placeholder='Enter Password' name='password' value={userData.password} onChange={handleChange} />

                <label htmlFor="age">Age:</label>
                <input type="number" id='age' placeholder='Enter Age' name='age' min={20} value={userData.age} onChange={handleChange} />

                <div className="spacer"></div>

                <div className="button-container">
                    <button type="submit">Submit</button>
                    <button type="reset" onClick={() => setUserData({ username: "", phone: "", email: "", password: "", age: "" })}>Reset</button>
                </div>

            </fieldset>
        </form>
    );
};

export default Register;