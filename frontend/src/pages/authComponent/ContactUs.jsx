import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const ContactUs = () => {
  let navigate = useNavigate();
  let [contactPage, setContactPage] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  let handleChange = (e) => {
    let { name, value } = e.target;
    setContactPage({ ...contactPage, [name]: value })
  }
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submiited")
    axios.post("/api/contact", contactPage)
      .then((res) => {
        console.log(res.data);
        toast.success("Thank You ,Our Team Will get back to You ASAP")
        setContactPage({
          name: "",
          email: "",
          phone: "",
          message: "",
        })
      })
    setTimeout(() => {
      navigate('/');
    }, 2000)
  }
  return (
    <section className="contactpage-container">
      <ToastContainer />
      <h1>Contact Details</h1>
      <aside className="contact-page">
        <article className="left-contactpage">
          <p><i className="fa-solid fa-house"></i> #384 Nandi Forset View Appartments</p>
          <p><i className="fa-solid fa-phone"></i> +91 9874563210</p>
          <p><i className="fa-solid fa-envelope"></i> prajwal02shekar@gmail.com</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.1039238941403!2d77.52047957485314!3d12.901038587407905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3fa3f27c37f5%3A0x8ce2ed7f11d1a2ca!2sNandi%20Forest%20View!5e0!3m2!1sen!2sin!4v1766052360426!5m2!1sen!2sin" width="400" height="300" style={{ border: 0 }} loading="lazy" ></iframe>
        </article>

        <article className="right-contactpage">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter Name' name='name' onChange={handleChange} required />
            <input type="email" placeholder=' Enter Email' name="email" onChange={handleChange} required />
            <input type="tel" minLength={10} maxLength={10} name='phone' placeholder='Enter Phone Number' onChange={handleChange} required />
            <textarea name="message" cols={50} rows={5} placeholder='Type Your Message' onChange={handleChange} required></textarea>
            <button>Submit</button>
          </form>
        </article>
      </aside>
    </section>
  )
}

export default ContactUs